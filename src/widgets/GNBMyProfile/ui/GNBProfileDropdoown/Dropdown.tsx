import { useAccountStore } from "@entities/account";

import { Divider, FlexDiv } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { DropdownItem } from "./DropdownItem";
import { DropdownProfile } from "./DropdownProfile";

export const GNBProfileDropdown = () => {
    const theme = useTheme();
    const { logout } = useAccountStore();
    return (
        <FlexDiv
            direction="column"
            css={{
                boxShadow: theme.shadow.cardShadow,
                gap: "10px",
                padding: "10px",
                backgroundColor: theme.palette.common.white,
                borderRadius: "10px",
            }}
        >
            <DropdownProfile />
            <Divider thickness={2} />
            <DropdownItem icon="user" label="Your profile" onClick={() => {}} />
            <DropdownItem icon="messagePlus" label="Your calendar" onClick={() => {}} />
            <DropdownItem icon="messagePlus" label="Reviews" onClick={() => {}} />
            <DropdownItem icon="setting" label="Settings" onClick={() => {}} />
            <Divider thickness={2} />
            <DropdownItem icon="logout" label="Logout" onClick={logout} />
        </FlexDiv>
    );
};
