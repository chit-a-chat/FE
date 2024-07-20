import { Link } from "react-router-dom";

import { TbuttonVariant } from "@shared/type";

import { css } from "@emotion/react";

import { theme } from "./theme/theme";

interface ButtonProps {
    variant?: TbuttonVariant;
    label: string;
    iconLeft?: "check";
    iconRight?: "check";
    to?: string;
}

export function Button({ variant = "primary", label, iconLeft, iconRight, to }: ButtonProps) {
    // FIXME: themeId 스토어 또는 로컬스토리지 적용
    const themeId = "light";

    const btnStyle = css({
        padding: "10px 20px",
        borderRadius: "8px",
        gap: "6px",
        cursor: "pointer",
        backgroundColor: theme[themeId].button[variant].bgColor,
        border:
            theme[themeId].button[variant].borderColor === "none"
                ? "none"
                : `1px solid ${theme[themeId].button[variant].borderColor}`,
        color: theme[themeId].button[variant].color,
        "&:disabled": variant === "disable",

        "&:hover": {
            backgroundColor: theme[themeId].button[variant].bgColorHover,
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
