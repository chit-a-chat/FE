import { TIcon } from "@shared/type";

import { useTheme } from "@emotion/react";

import { ICONS } from "./constant/Icons";
import { CustomIcon } from "./customIcons/CustomIcon";

const SIZE_TO_PIXEL = {
    xl: 30,
    l: 24,
    m: 20,
    s: 18,
    xs: 14,
};

type TIconSize = keyof typeof SIZE_TO_PIXEL;
interface CustomIconsProps {
    type: TIcon;
    size?: TIconSize;
    color?: string;
}
export function Icon({ type, size = "m", color }: CustomIconsProps) {
    const theme = useTheme();
    const NewIcon = ICONS[type];
    return typeof NewIcon === "string" ? (
        <CustomIcon size={SIZE_TO_PIXEL[size]} src={NewIcon} />
    ) : (
        <NewIcon size={SIZE_TO_PIXEL[size]} color={color ?? theme.palette.common.black} />
    );
}
