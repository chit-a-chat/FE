import { TButtonVariant, TIcon } from "@shared/type";
import { Text } from "@shared/ui";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Icons } from "./icons";

interface ButtonProps {
    variant?: TButtonVariant;
    label: string;
    iconLeft?: { icon: TIcon; color: string };
    iconRight?: { icon: TIcon; color: string };
    // TODO: 버튼 사이즈 'large', 'small'인 경우 추가
    size?: "sm" | "md" | "lg";
}
const StyledButton = styled.button<{
    size: NonNullable<ButtonProps["size"]>;
    variant: NonNullable<ButtonProps["variant"]>;
}>`
    ${({ theme, size, variant }) => css`
        padding: ${theme.button.shape.padding[size]};
        border-radius: ${theme.button.shape.radius[size]};
        gap: ${theme.button.shape.gap[size]};
        cursor: ${variant === "disable" ? "auto" : "pointer"};
        background-color: ${theme.button.color.background.default?.[variant]};
        // border를 안쪽으로 주기 위해 boxShadow 사용함
        box-shadow: ${theme.button.color.border.default?.[variant] ?? "none"};
        color: ${theme.button.color.text.default?.[variant]};
        position: relative;
        display: flex;
        align-items: center;

        &:hover {
            background-color: ${theme.button.color.background.hover?.[variant]};
        }
        &:focus:not(:active)::after {
            content: "";
            border: ${theme.button.color.border.focus?.[variant]};
            position: absolute;
            left: ${variant === "primary" || variant === "error" ? "-2px" : "0px"};
            top: ${variant === "primary" || variant === "error" ? "-3px" : "0px"};
            width: ${`calc(100% + ${variant === "primary" || variant === "error" ? 4 : 0}px)`};
            height: ${`calc(100% + ${variant === "primary" || variant === "error" ? 6 : 0}px)`};
            border-radius: ${theme.button.shape.radius[size]};
        }

        &:active {
            background-color: ${theme.button.color.background.default?.[variant]};
            box-shadow: ${theme.button.color.border.default?.[variant] ?? "none"};
            color: ${theme.button.color.text.default?.[variant]};
        }
    `}
`;
const TYPO_VARIANT = {
    sm: "button/small",
    md: "button/medium",
    lg: "button/large",
} as const;

// TODO: typography theme 적용 2024.08.03. 김하늬
export function Button({
    variant = "primary",
    label,
    iconLeft,
    iconRight,
    size = "md",
}: ButtonProps) {
    return (
        <StyledButton variant={variant} size={size}>
            {iconLeft && (
                <Icons
                    type={iconLeft.icon}
                    size={size === "md" ? "l" : "m"}
                    color={iconLeft.color}
                />
            )}
            <Text color="inherit" typoVariant={TYPO_VARIANT[size]}>
                {label}
            </Text>
            {iconRight && (
                <Icons
                    type={iconRight.icon}
                    size={size === "md" ? "l" : "m"}
                    color={iconRight.color}
                />
            )}
        </StyledButton>
    );
}
