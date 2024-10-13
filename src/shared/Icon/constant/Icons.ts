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

import { default as arrowTarget } from "../customIcons/arrowTarget.png";
import { default as cardHeart } from "../customIcons/cardHeart.png";
import { default as googleLogo } from "../customIcons/googleLogo.png";
import { default as graphBar } from "../customIcons/graphBar.png";

export const ICONS = {
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
    google: googleLogo,
    "card-heart": cardHeart,
    "graph-bar": graphBar,
    "arrow-target": arrowTarget,
} as const;
