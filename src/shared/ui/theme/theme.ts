import i18n from "@features/i18n";

import { TTypoVariant } from "@shared/type";

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

// Typography font-family
const fontFamily = {
    fontFamily:
        i18n.language === "Korean" ? "'IBM Plex Sans KR', sans-serif" : "'Roboto', sans-serif",
};

// Typography 한국어
const typoKo: Record<TTypoVariant, object> = {
    "display/superLarge": {
        fontSize: "87.4px",
        lineHeight: "132px",
        letterSpacing: "0px",
        fontWeight: 700,
    },
    "display/large": {
        fontSize: "57px",
        lineHeight: "86px",
        letterSpacing: "0px",
        fontWeight: 700,
    },
    "display/medium": {
        fontSize: "51.3px",
        lineHeight: "78px",
        letterSpacing: "0px",
        fontWeight: 500,
    },
    "display/small": {
        fontSize: "39.9px",
        lineHeight: "60px",
        letterSpacing: "0px",
        fontWeight: 400,
    },
    "display/notificationTitle": {
        fontSize: "21px",
        lineHeight: "32px",
        letterSpacing: "0px",
        fontWeight: 500,
    },
    "h1/bold": {
        fontSize: "34.2px",
        lineHeight: "52px",
        letterSpacing: "0px",
        fontWeight: 700,
    },
    "h2/medium": {
        fontSize: "28px",
        lineHeight: "42px",
        letterSpacing: "0px",
        fontWeight: 500,
    },
    "h3/medium": {
        fontSize: "24px",
        lineHeight: "36px",
        letterSpacing: "0px",
        fontWeight: 500,
    },
    "h4/regular": {
        fontSize: "21px",
        lineHeight: "32px",
        letterSpacing: "0px",
        fontWeight: 400,
    },
    "h5/bold": {
        fontSize: "18px",
        lineHeight: "24px",
        letterSpacing: "0px",
        fontWeight: 700,
    },
    "h6/bold": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0px",
        fontWeight: 700,
    },
    "body/bold": {
        fontSize: "17.1px",
        lineHeight: "28px",
        letterSpacing: "0.25px",
        fontWeight: 700,
    },
    "body/medium": {
        fontSize: "17.1px",
        lineHeight: "28px",
        letterSpacing: "0.25px",
        fontWeight: 500,
    },
    "body/regular": {
        fontSize: "17.1px",
        lineHeight: "28px",
        letterSpacing: "0.25px",
        fontWeight: 400,
    },
    "label/bold": {
        fontSize: "13.3px",
        lineHeight: "20px",
        letterSpacing: "0.1px",
        fontWeight: 700,
    },
    "label/medium": {
        fontSize: "13.3px",
        lineHeight: "20px",
        letterSpacing: "0.1px",
        fontWeight: 500,
    },
    "label/regular": {
        fontSize: "13.3px",
        lineHeight: "20px",
        letterSpacing: "0.1px",
        fontWeight: 400,
    },
    "button/large": {
        fontSize: "24px",
        lineHeight: "28px",
        letterSpacing: "0.5px",
        fontWeight: 500,
    },
    "button/medium": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.5px",
        fontWeight: 500,
    },
    "button/small": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0.5px",
        fontWeight: 500,
    },
    "linkLarge/regular": {
        fontSize: "26.65px",
        lineHeight: "38.5px",
        letterSpacing: "0.25px",
        fontWeight: 400,
    },
    "linkMedium/regular": {
        fontSize: "17.1px",
        lineHeight: "28px",
        letterSpacing: "0.25px",
        fontWeight: 400,
    },
    "tag/bold": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0px",
        fontWeight: 700,
    },
    "tag/medium": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0px",
        fontWeight: 500,
    },
    "tag/regular": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0px",
        fontWeight: 400,
    },
} as const;

// Typography 영어
const typoEn: Record<TTypoVariant, object> = {
    "display/superLarge": {
        fontSize: "76px",
        lineHeight: "114px",
        letterSpacing: "1px",
        fontWeight: 700,
    },
    "display/large": {
        fontSize: "57px",
        lineHeight: "86px",
        letterSpacing: "1px",
        fontWeight: 700,
    },
    "display/medium": {
        fontSize: "50.52px",
        lineHeight: "76px",
        letterSpacing: "1px",
        fontWeight: 400,
    },
    "display/small": {
        fontSize: "36px",
        lineHeight: "54px",
        letterSpacing: "1px",
        fontWeight: 400,
    },
    "display/notificationTitle": {
        fontSize: "21px",
        lineHeight: "32px",
        letterSpacing: "0px",
        fontWeight: 500,
    },
    "h1/bold": {
        fontSize: "38px",
        lineHeight: "57px",
        letterSpacing: "1px",
        fontWeight: 700,
    },
    "h2/medium": {
        fontSize: "28px",
        lineHeight: "40px",
        letterSpacing: "1px",
        fontWeight: 500,
    },
    "h3/medium": {
        fontSize: "24px",
        lineHeight: "36px",
        letterSpacing: "1px",
        fontWeight: 500,
    },
    "h4/regular": {
        fontSize: "21px",
        lineHeight: "32px",
        letterSpacing: "1px",
        fontWeight: 400,
    },
    "h5/bold": {
        fontSize: "18px",
        lineHeight: "28px",
        letterSpacing: "1px",
        fontWeight: 700,
    },
    "h6/bold": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "1px",
        fontWeight: 700,
    },
    "body/bold": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.25px",
        fontWeight: 700,
    },
    "body/medium": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.25px",
        fontWeight: 500,
    },
    "body/regular": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.25px",
        fontWeight: 400,
    },
    "label/bold": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0.1px",
        fontWeight: 700,
    },
    "label/medium": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0.1px",
        fontWeight: 500,
    },
    "label/regular": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0.1px",
        fontWeight: 400,
    },
    "button/large": {
        fontSize: "24px",
        lineHeight: "36px",
        letterSpacing: "0.5px",
        fontWeight: 500,
    },
    "button/medium": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.5px",
        fontWeight: 500,
    },
    "button/small": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0.5px",
        fontWeight: 500,
    },
    "linkLarge/regular": {
        fontSize: "24px",
        lineHeight: "36px",
        letterSpacing: "0.25px",
        fontWeight: 400,
    },
    "linkMedium/regular": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.25px",
        fontWeight: 400,
    },
    "tag/bold": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0px",
        fontWeight: 700,
    },
    "tag/medium": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0px",
        fontWeight: 500,
    },
    "tag/regular": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0px",
        fontWeight: 400,
    },
} as const;

const buttonShape = {
    // padding
    padding: {
        // TODO: 버튼 사이즈에 따라 다르게 지정 2024.08.03. 김하늬
        sm: `10px 20px`,
        md: `10px 20px`,
        lg: `14px 20px`,
    },
    // border-radius
    radius: {
        sm: "8px",
        md: "8px",
        lg: "8px",
    },
    // gap between button icon and label
    gap: {
        sm: "6px",
        md: "6px",
        lg: "6px",
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

const lightTypoColor = {
    // TODO: 기본 타이포 색상 확인되면 수정 2024.08.22. 김하늬
    defaultColor: lightPalette.common.black,
    linkColor: lightPalette.primary[6],
};

const lightPushNotificationColor = {
    container: {
        default: lightPalette.primary[6],
        error: lightPalette.red[6],
        success: lightPalette.green[5],
        info: lightPalette.blue[5],
    },
    icon: {
        default: lightPalette.primary[6],
        error: lightPalette.red[6],
        success: lightPalette.green[6],
        info: lightPalette.blue[6],
    },
    typo: {
        default: lightPalette.primary[5],
        error: lightPalette.red[5],
        success: lightPalette.green[5],
        info: lightPalette.blue[6],
        title: lightPalette.grey[8],
        content: lightPalette.grey[5],
    },
};

const light = {
    palette: lightPalette,
    // app background color
    bgColor: "linear-gradient(180deg, rgba(231, 225, 255, 0.4) 0%, rgba(221, 230, 253, 0.4) 83%)",
    button: {
        shape: buttonShape,
        color: lightButtonColor,
    },
    spacing,
    typo:
        i18n.language === "Korean"
            ? { ...typoKo, ...lightTypoColor, ...fontFamily }
            : { ...typoEn, ...lightTypoColor, ...fontFamily },
    pushNotification: { color: lightPushNotificationColor },
};

export type TSpacing = typeof spacing;
export type TButtonShape = typeof buttonShape;

export const theme = { light };
