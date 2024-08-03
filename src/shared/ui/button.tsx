import { Link } from "react-router-dom";

import { TbuttonVariant } from "@shared/type";

import { Theme, css } from "@emotion/react";

interface ButtonProps {
    variant?: TbuttonVariant;
    label: string;
    iconLeft?: "check";
    iconRight?: "check";
    to?: string;
}

export function Button({ variant = "primary", label, iconLeft, iconRight, to }: ButtonProps) {
    const btnStyle = (theme: Theme) =>
        css({
            padding: "10px 20px",
            borderRadius: "8px",
            gap: "6px",
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
                padding: "3px 2px",
                borderRadius: "8px",
                gap: "6px",
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
