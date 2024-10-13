import { Icon } from "@shared/Icon";
import { TPushNotification } from "@shared/type";
import { FlexDiv } from "@shared/ui";

import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

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
            <Icon type="info" size="m" color={theme.pushNotification.color.icon[variant]} />
            <FlexDiv
                direction="column"
                justifyContent={content ? "start" : "space-between"}
                alignItems="start"
            >
                <Typo variant="label/medium" color={theme.pushNotification.color.typo.title}>
                    {title}
                </Typo>
                <Typo variant="label/regular" color={theme.pushNotification.color.typo.content}>
                    {content}
                </Typo>
                <Typo variant="label/regular" color={theme.pushNotification.color.typo[variant]}>
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
        filter: drop-shadow(0px 0px 5px #0000001a) drop-shadow(0px 0px 20px #0000000d);
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
            background-color: ${theme.pushNotification.color.container[variant]};
        }
    `}
`;
