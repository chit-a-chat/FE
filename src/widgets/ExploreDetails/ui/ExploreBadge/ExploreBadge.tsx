import { UserProfileIcons } from "@entities/user";

import { Icon } from "@shared/Icon";
import { Badge } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ExploreBadgeProps = {
    label: string;
    icon?: string;
    isMain?: boolean;
};
export const ExploreBadge = ({ label, icon, isMain = false }: ExploreBadgeProps) => {
    const theme = useTheme();
    const iconType = icon && UserProfileIcons[icon as keyof typeof UserProfileIcons];
    return (
        <Badge
            key={`${label}`}
            radius="full"
            fontVariant="tag/regular"
            backgroundColor={isMain ? theme.palette.primary[0] : theme.palette.grey[0]}
            color={theme.palette.common.black}
        >
            {iconType && <Icon type={iconType} color={theme.palette.common.black} />}
            {label}
        </Badge>
    );
};
