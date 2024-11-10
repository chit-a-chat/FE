import { AccountProfile } from "@entities/account";

import { DropdownMenu } from "@shared/ui";

import { GNBProfileDropdown } from "./GNBProfileDropdoown/Dropdown";

export const GNBMyProfile = () => {
    return (
        <DropdownMenu>
            <DropdownMenu.Trigger>
                <AccountProfile />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <GNBProfileDropdown />
            </DropdownMenu.Content>
        </DropdownMenu>
    );
};
