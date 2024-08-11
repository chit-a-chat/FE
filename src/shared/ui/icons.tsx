import { TIcon } from "@shared/type";

import {
    IconArrowLeft,
    IconArrowRight,
    IconBell,
    IconBrandBadoo,
    IconCheck,
    IconChevronDown,
    IconChevronUp,
    IconHeartHandshake,
    IconMapPin,
    IconSearch,
    IconSettings,
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
}

const icons = {
    "arrow-left": IconArrowLeft,
    "arrow-right": IconArrowRight,
    bell: IconBell,
    check: IconCheck,
    "chevron-down": IconChevronDown,
    "chevron-down-fill": IconTriangleInvertedFilled,
    "chevron-up": IconChevronUp,
    heart: IconHeartHandshake,
    "heart-smily": IconBrandBadoo,
    location: IconMapPin,
    search: IconSearch,
    setting: IconSettings,
    user: IconUser,
    x: IconX,
};

// TODO: color prop 받아서 적용, size prop 반복 제거. 2024.08.03. 김하늬
export function Icons({ type, size = "m" }: CustomIconsProps) {
    const NewIcon = icons[type];
    return <NewIcon size={SIZE_TO_PIXEL[size]} />;
}
