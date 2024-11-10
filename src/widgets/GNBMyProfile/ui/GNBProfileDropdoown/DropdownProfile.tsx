import { useAccountStore } from "@entities/account";

import { FlexDiv, Profile, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const DropdownProfile = () => {
    const theme = useTheme();
    const { account } = useAccountStore();
    if (!account) return;

    return (
        <FlexDiv direction="row" gap={10}>
            <Profile size="sm" src={account.profileImage} />
            <FlexDiv gap={2} direction="column">
                <Text typoVariant="supporting/medium" color={theme.palette.common.black}>
                    {account.name}
                </Text>
                <Text typoVariant="supporting/regular" color={theme.palette.grey[5]}>
                    {account.email}
                </Text>
            </FlexDiv>
        </FlexDiv>
    );
};
