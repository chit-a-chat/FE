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
            border: theme.button.border.default?.[variant] ?? "none",
            color: theme.button.color.default?.[variant],

            "&:disabled": variant === "disable",

            "&:hover": {
                backgroundColor: theme.button.bgColor.hover?.[variant],
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
