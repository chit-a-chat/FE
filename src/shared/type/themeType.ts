import { ICONS } from "@shared/Icon/constant/Icons";

// button types
export type TButtonStatus = "default" | "focus" | "hover" | "hoverFocus" | "active";
export type TButtonVariant = "primary" | "secondary" | "error" | "disable";

// icons types
export type TIcon = keyof typeof ICONS;

// typo types
export type TTypoVariant =
    | "display/superLarge"
    | "display/large"
    | "display/medium"
    | "display/small"
    | "display/notificationTitle"
    | "h1/bold"
    | "h2/medium"
    | "h3/medium"
    | "h4/regular"
    | "h5/bold"
    | "h6/bold"
    | "body/bold"
    | "body/medium"
    | "body/regular"
    | "label/bold"
    | "label/medium"
    | "label/regular"
    | "button/large"
    | "button/medium"
    | "button/small"
    | "link/large"
    | "link/regular"
    | "tag/bold"
    | "tag/medium"
    | "tag/regular"
    | "supporting/regular"
    | "supporting/medium"
    | "supporting/bold";

// push notification types
export type TPushNotification = "default" | "error" | "success" | "info";
