import { CSSProperties, MouseEventHandler, useCallback, useState } from "react";

import { Icon } from "@shared/Icon";

import { useTheme } from "@emotion/react";

import { FlexDiv } from "../components/flexDiv";

const SizeToCss: Record<NonNullable<StarRatingProps["size"]>, CSSProperties> = {
    md: { gap: 6 },
};

type StarRatingProps = {
    rate: number;
    size?: "md";
    isEdit?: boolean;
};

const calculateRateFromPos = (target: Element, mouseXPos: number) => {
    const targetPos = target.getBoundingClientRect();
    const relativeClickXPos = mouseXPos - targetPos.x;
    const isLeftHalf = relativeClickXPos < targetPos.width / 2;
    const index = parseInt(target.getAttribute("data-index") || "0.5");
    const newRate = isLeftHalf ? index - 0.5 : index;
    return newRate;
};

export const StarRating = ({ rate: initialRate, size = "md", isEdit = false }: StarRatingProps) => {
    const [rate, setRate] = useState<number>(initialRate);
    const [hoverRate, setHoverRate] = useState<number>(0);
    const handleLeaveStar = useCallback(() => {
        setHoverRate(0);
    }, []);
    const handleHoverStar = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
        const target = e.target;
        if (target instanceof Element) {
            const starElement = target.closest("[data-index]");
            if (!starElement) return;
            const newRate = calculateRateFromPos(starElement, e.clientX);
            setHoverRate(newRate);
        }
    }, []);
    const handleClickStar = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
        const target = e.target;
        if (target instanceof Element) {
            const starElement = target.closest("[data-index]");
            if (!starElement) return;
            const newRate = calculateRateFromPos(starElement, e.clientX);
            setRate(newRate);
        }
    }, []);

    const theme = useTheme();
    return (
        <FlexDiv
            direction="row"
            css={{ ...SizeToCss[size] }}
            onClick={isEdit ? handleClickStar : undefined}
            onMouseLeave={isEdit ? handleLeaveStar : undefined}
            onMouseMove={isEdit ? handleHoverStar : undefined}
        >
            {Array.from({ length: 5 }).map((_, index) => {
                const fillRatio = (hoverRate || rate) - index;
                switch (true) {
                    case fillRatio > 0.5: {
                        return (
                            <Icon
                                type="starFilled"
                                size="l"
                                key={`star-${index}`}
                                color={theme.palette.yellow[2]}
                                data-index={index + 1}
                                css={{ cursor: "pointer" }}
                            />
                        );
                    }
                    case fillRatio > 0: {
                        return (
                            <Icon
                                type="starHalfFilled"
                                size="l"
                                key={`star-half`}
                                color={theme.palette.yellow[2]}
                                data-index={index + 1}
                                css={{ cursor: "pointer" }}
                            />
                        );
                    }
                    default: {
                        return (
                            <Icon
                                type="starEmpty"
                                size="l"
                                key={`star-empty-${index}`}
                                color={theme.palette.grey[5]}
                                data-index={index + 1}
                                css={{ cursor: "pointer" }}
                            />
                        );
                    }
                }
            })}
        </FlexDiv>
    );
};
