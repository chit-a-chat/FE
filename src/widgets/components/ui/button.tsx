import { Link } from "react-router-dom";

import { TButtonVariant, TIcon } from "@shared/type";

import { Theme, css } from "@emotion/react";

import { Icons } from "./icons";

interface ButtonProps {
    variant?: TButtonVariant;
    label: string;
    iconLeft?: TIcon;
    iconRight?: TIcon;
    to?: string;
    // TODO: 버튼 사이즈 'large', 'small'인 경우 추가
    size?: "medium";
}

// TODO: typography theme 적용 2024.08.03. 김하늬
export function Button({
    variant = "primary",
    label,
    iconLeft,
    iconRight,
    to,
    size = "medium",
}: ButtonProps) {
    const btnStyle = (theme: Theme) =>
        css({
            padding: theme.button.shape.padding[size],
            borderRadius: theme.button.shape.radius[size],
            gap: theme.button.shape.gap[size],
            cursor: variant === "disable" ? "auto" : "pointer",
            backgroundColor: theme.button.color.background.default?.[variant],
            // border를 안쪽으로 주기 위해 boxShadow 사용함
            boxShadow: theme.button.color.border.default?.[variant] ?? "none",
            color: theme.button.color.text.default?.[variant],
            position: "relative",
            display: "flex",
            alignItems: "center",

            "&:hover": {
                backgroundColor: theme.button.color.background.hover?.[variant],
            },

            "&:focus:not(:active)::after": {
                content: "''",
                border: theme.button.color.border.focus?.[variant],
                position: "absolute",
                left: variant === "primary" || variant === "error" ? "-2px" : "0px",
                top: variant === "primary" || variant === "error" ? "-3px" : "0px",
                width: `calc(100% + ${variant === "primary" || variant === "error" ? 4 : 0}px)`,
                height: `calc(100% + ${variant === "primary" || variant === "error" ? 6 : 0}px)`,
                borderRadius: theme.button.shape.radius[size],
            },

            "&:active": {
                backgroundColor: theme.button.color.background.default?.[variant],
                boxShadow: theme.button.color.border.default?.[variant] ?? "none",
                color: theme.button.color.text.default?.[variant],
            },
        });

    return (
        <>
            {to && <Link to={to} css={btnStyle} />}
            <button css={btnStyle}>
                {iconLeft && <Icons type={iconLeft} size={size === "medium" ? "l" : "m"} />}
                {label}
                {iconRight && <Icons type={iconRight} size={size === "medium" ? "l" : "m"} />}
            </button>
        </>
    );
}
