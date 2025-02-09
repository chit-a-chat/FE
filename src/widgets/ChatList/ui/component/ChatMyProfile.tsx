import { useTranslation } from "react-i18next";

import { useAccountStore } from "@entities/account";

import { FlexDiv, Profile, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const ChatMyProfile = () => {
    const { account } = useAccountStore();
    const theme = useTheme();
    const { t } = useTranslation("matches");
    return (
        <FlexDiv direction="row" gap={14}>
            <Profile src={account?.profileImage} size="lg" />
            <FlexDiv direction="column" justifyContent="center">
                <Text typoVariant="h5/bold" color={theme.palette.common.black}>
                    {account?.name}
                </Text>
                <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                    {t("ChatRoom.Profile.MyAccount")}
                </Text>
            </FlexDiv>
        </FlexDiv>
    );
};
