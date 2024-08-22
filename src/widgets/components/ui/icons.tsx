import { TIcon } from "@shared/type";

import { useTheme } from "@emotion/react";
import {
    IconArrowLeft,
    IconArrowRight,
    IconBell,
    IconBellFilled,
    IconBrandBadoo,
    IconCheck,
    IconChevronDown,
    IconChevronUp,
    IconHeartHandshake,
    IconInfoCircle,
    IconMapPin,
    IconPlus,
    IconSearch,
    IconSettings,
    IconSparkles,
    IconTriangleInvertedFilled,
    IconUser,
    IconX,
} from "@tabler/icons-react";

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

const icons = {
    "arrow-left": IconArrowLeft,
    "arrow-right": IconArrowRight,
    bell: IconBell,
    "bell-filled": IconBellFilled,
    check: IconCheck,
    "chevron-down": IconChevronDown,
    "chevron-down-fill": IconTriangleInvertedFilled,
    "chevron-up": IconChevronUp,
    heart: IconHeartHandshake,
    "heart-smily": IconBrandBadoo,
    info: IconInfoCircle,
    location: IconMapPin,
    plus: IconPlus,
    search: IconSearch,
    setting: IconSettings,
    twinkle: IconSparkles,
    user: IconUser,
    x: IconX,
};

export function Icons({ type, size = "m", color }: CustomIconsProps) {
    const theme = useTheme();

    const NewIcon = icons[type];
    return <NewIcon size={SIZE_TO_PIXEL[size]} color={color ?? theme.palette.common.black} />;
}
