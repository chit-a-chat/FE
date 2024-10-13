import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";

import { FlexDiv } from "@shared/ui";

import { css } from "@emotion/react";

import { Card } from "./components/Card";

export const SignInStatistics = ({ children }: PropsWithChildren) => {
    const cardContainer = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState<string>("");

    useLayoutEffect(() => {
        if (cardContainer.current) {
            setContainerHeight(`${((330 + 32 - 2) * cardContainer.current.children.length) / 2}px`);
        }
    }, [cardContainer]);

    return (
        <FlexDiv
            direction="column"
            justifyContent="start"
            gap={32}
            css={css`
                flex: 1;
                overflow-y: hidden;
                padding-top: 40px;
                @keyframes scroll {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-${containerHeight});
                    }
                }
                & > .card {
                    animation: scroll 5s linear infinite;
                }
            `}
            ref={cardContainer}
        >
            {children}
        </FlexDiv>
    );
};

SignInStatistics.Card = Card;
