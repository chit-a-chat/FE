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

interface IconsProps {
    type: TIcon;
    size?: "XL" | "L" | "M" | "S" | "XS";
}

// TODO: color prop 받아서 적용, size prop 반복 제거. 2024.08.03. 김하늬
export function Icons({ type, size = "M" }: IconsProps) {
    const SIZE_TO_PIXEL = {
        XL: 30,
        L: 24,
        M: 20,
        S: 18,
        XS: 14,
    };

    const icons = {
        "arrow-left": <IconArrowLeft size={SIZE_TO_PIXEL[size]} />,
        "arrow-right": <IconArrowRight size={SIZE_TO_PIXEL[size]} />,
        bell: <IconBell size={SIZE_TO_PIXEL[size]} />,
        check: <IconCheck size={SIZE_TO_PIXEL[size]} />,
        "chevron-down": <IconChevronDown size={SIZE_TO_PIXEL[size]} />,
        "chevron-down-fill": <IconTriangleInvertedFilled size={SIZE_TO_PIXEL[size]} />,
        "chevron-up": <IconChevronUp size={SIZE_TO_PIXEL[size]} />,
        heart: <IconHeartHandshake size={SIZE_TO_PIXEL[size]} />,
        "heart-smily": <IconBrandBadoo size={SIZE_TO_PIXEL[size]} />,
        location: <IconMapPin size={SIZE_TO_PIXEL[size]} />,
        search: <IconSearch size={SIZE_TO_PIXEL[size]} />,
        setting: <IconSettings size={SIZE_TO_PIXEL[size]} />,
        user: <IconUser size={SIZE_TO_PIXEL[size]} />,
        x: <IconX size={SIZE_TO_PIXEL[size]} />,
    };

    return icons[type];
}
