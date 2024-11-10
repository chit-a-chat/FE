import { useCallback, useState } from "react";

import { useTranslation } from "react-i18next";

import { Button } from "@widgets/components";

import { FlexDiv } from "@shared/ui";

import styled from "@emotion/styled";

import { ProfileIndicator } from "./ProfileIndicator";

export type BlurProfileCardProps = {
    images: string[];
};

const BlurDiv = styled(FlexDiv)`
    position: absolute;
    background: linear-gradient(
        151.06deg,
        rgba(255, 255, 255, 0.5) 3.57%,
        rgba(255, 255, 255, 0.2) 97.69%
    );
    box-shadow: 0px 15.4524px 30.9049px rgba(195, 178, 255, 0.2);
    backdrop-filter: blur(7.73px);
`;

export const BlurProfileCard = ({ images }: BlurProfileCardProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const changeImage = useCallback((index: number) => {
        setSelectedIndex(index);
    }, []);
    const { t } = useTranslation("explore");
    return (
        <FlexDiv direction="column" css={{ height: "513px", position: "relative" }}>
            <img
                src={images[selectedIndex]}
                css={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <ProfileIndicator
                totalIndex={images.length}
                selectedIndex={selectedIndex}
                onClickIndicator={changeImage}
            />
            <BlurDiv
                css={{
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "11px",
                }}
            />
            <BlurDiv
                css={{
                    left: 0,
                    top: 0,
                    width: "10px",
                    height: "100%",
                }}
            />
            <BlurDiv
                css={{
                    right: 0,
                    top: 0,
                    width: "10px",
                    height: "100%",
                }}
            />
            <BlurDiv
                css={{
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "67px",
                    padding: "11px 20px 16px ",
                }}
                justifyContent="space-between"
            >
                <Button variant="secondary" label={t("NextButton")} size="md" />
                <Button label={t("RequestButton")} size="md" />
            </BlurDiv>
        </FlexDiv>
    );
};
