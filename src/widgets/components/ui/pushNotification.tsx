import { TPushNotification } from "@shared/type";
import { FlexDiv } from "@shared/ui";

import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { Icons } from "./icons";
import { Typo } from "./typo";

interface PushNotificationProps {
    variant?: TPushNotification;
    title: string;
    content?: string;
    linkText?: string;
}

export function PushNotification(props: PushNotificationProps) {
    const { variant = "default", title, content, linkText } = props;
    const theme = useTheme();
    return (
        <PushNotificationContainer variant={variant}>
            <Icons type="info" size="m" color={theme.pushNotification.color[variant]} />
            <FlexDiv
                direction="column"
                justifyContent={content ? "start" : "space-between"}
                alignItems="start"
            >
                <Typo variant="label/medium" color={theme.pushNotification.color.title}>
                    {title}
                </Typo>
                <Typo variant="label/regular" color={theme.pushNotification.color.content}>
                    {content}
                </Typo>
                <Typo variant="label/regular" color={theme.pushNotification.color[variant]}>
                    {linkText}
                </Typo>
            </FlexDiv>
        </PushNotificationContainer>
    );
}

const PushNotificationContainer = styled.div<{ variant: TPushNotification }>`
    ${({ variant, theme }) => css`
        width: 393px;
        height: 83px;
        display: flex;
        flex-direction: row;
        gap: 4px;
        border-radius: 8px;
        box-shadow:
            0 0 5px #0000000d,
            0 0 20px #00000033;
        padding: 10px 8px;
        padding-left: 18px;
        position: relative;
        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: -0.5px;
            width: 10px;
            height: 84px;
            border-radius: 8px 0px 0px 8px;
            background-color: ${theme.pushNotification.color[variant]};
        }
    `}
`;
