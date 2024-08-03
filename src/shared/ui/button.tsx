import { Link } from "react-router-dom";

import { TbuttonVariant } from "@shared/type";

import { Theme, css } from "@emotion/react";

interface ButtonProps {
    variant?: TbuttonVariant;
    label: string;
    iconLeft?: "check";
    iconRight?: "check";
    to?: string;
    // TODO: 버튼 사이즈 'large', 'small'인 경우 추가
    size?: "medium";
}

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
            padding: theme.button.padding[size],
            borderRadius: theme.button.radius[size],
            gap: theme.button.gap[size],
            cursor: variant === "disable" ? "auto" : "pointer",
            backgroundColor: theme.button.bgColor.default?.[variant],
            // border를 안쪽으로 주기 위해 boxShadow 사용함
            boxShadow: theme.button.border.default?.[variant] ?? "none",
            color: theme.button.color.default?.[variant],
            position: "relative",

            "&:disabled": variant === "disable",

            "&:hover": {
                backgroundColor: theme.button.bgColor.hover?.[variant],
            },

            "&:focus:not(:active)::after": {
                content: "''",
                border: theme.button.border.focus?.[variant],
                position: "absolute",
                left: variant === "primary" || variant === "error" ? "-2px" : "0px",
                top: variant === "primary" || variant === "error" ? "-3px" : "0px",
                width: `calc(100% + ${variant === "primary" || variant === "error" ? 4 : 0}px)`,
                height: `calc(100% + ${variant === "primary" || variant === "error" ? 6 : 0}px)`,
                borderRadius: theme.button.radius[size],
            },

            "&:active": {
                backgroundColor: theme.button.bgColor.default?.[variant],
                boxShadow: theme.button.border.default?.[variant] ?? "none",
                color: theme.button.color.default?.[variant],
            },
        });

    return (
        <>
            {to && <Link to={to} css={btnStyle} />}
            <button css={btnStyle}>
                {/* TODO: icon 삽입 2024.07.20. 김하늬 */}
                {iconLeft && "iconLeft"}
                {label}
                {iconRight && "iconRight"}
            </button>
        </>
    );
}
