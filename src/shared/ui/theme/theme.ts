import { lightPalette } from "./palette";

/**
 * common
 */

const spacing = {
    xl: "32px",
    lg: "20px",
    "md-lg": "18px",
    md: "16px",
    "sm-md": "14px",
    sm: "12px",
    xs: "10px",
    "2xs": "8px",
    "3xs": "6px",
    "4xs": "4px",
    "5xs": "2px",
};

const buttonShape = {
    // padding
    padding: {
        // TODO: 버튼 사이즈에 따라 다르게 지정 2024.08.03. 김하늬
        medium: `${spacing.xs} ${spacing.lg}`,
    },
    // border-radius
    radius: {
        medium: spacing["2xs"],
    },
    // gap between button icon and label
    gap: {
        medium: spacing["3xs"],
    },
};

/**
 * light theme
 */

const lightButtonColor = {
    // background-color
    background: {
        default: {
            primary: lightPalette.primary[5],
            secondary: lightPalette.common.white,
            error: lightPalette.red[4],
            disable: lightPalette.grey[1],
        },
        hover: {
            primary: lightPalette.primary[6],
            secondary: lightPalette.primary[0],
            error: lightPalette.red[5],
        },
    },
    // border
    border: {
        default: {
            // border를 안쪽으로 주기 위해 boxShadow 사용함
            secondary: `0 0 0 1.5px ${lightPalette.primary[3]} inset`,
        },
        focus: {
            primary: `1px solid ${lightPalette.primary[6]}`,
            secondary: `1.5px solid ${lightPalette.primary[7]}`,
            error: `1px solid ${lightPalette.red[6]}`,
        },
    },
    // text-color
    text: {
        default: {
            primary: lightPalette.common.white,
            secondary: lightPalette.primary[5],
            error: lightPalette.common.white,
            disable: lightPalette.grey[3],
        },
    },
};

const light = {
    // app background color
    bgColor: "linear-gradient(180deg, rgba(231, 225, 255, 0.4) 0%, rgba(221, 230, 253, 0.4) 83%)",
    button: {
        shape: buttonShape,
        color: lightButtonColor,
    },
    spacing,
};

export type TSpacing = typeof spacing;
export type TButtonShape = typeof buttonShape;

export const theme = { light };
