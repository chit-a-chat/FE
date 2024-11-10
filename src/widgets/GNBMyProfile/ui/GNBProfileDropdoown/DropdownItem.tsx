import { Icon } from "@shared/Icon";
import { TIcon } from "@shared/type";
import { DropdownMenu, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type DropdownItemProps = {
    icon: Extract<TIcon, "user" | "messagePlus" | "setting" | "logout">;
    label: string;
    onClick: () => void;
};

export const DropdownItem = ({ icon, label, onClick }: DropdownItemProps) => {
    const theme = useTheme();
    return (
        <DropdownMenu.Item
            css={{
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                padding: "8px 10px",
                borderRadius: "8px",
                ":hover": {
                    backgroundColor: theme.palette.primary[0],
                },
            }}
            onClick={onClick}
        >
            <Icon type={icon} />
            <Text typoVariant="supporting/regular">{label}</Text>
        </DropdownMenu.Item>
    );
};
