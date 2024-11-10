import { useTranslation } from "react-i18next";

import { Icon } from "@shared/Icon";
import { FlexDiv, Profile, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { useAccountStore } from "../model/store";

export const AccountProfile = () => {
    const { account } = useAccountStore();
    const theme = useTheme();
    const { t } = useTranslation("gnb");
    return (
        <FlexDiv gap={6}>
            <FlexDiv direction="column" alignItems="flex-end">
                <Text typoVariant="supporting/regular" color={theme.palette.common.black}>
                    {t("Hello")}
                </Text>
                <Text typoVariant="supporting/regular" color={theme.palette.primary[5]}>
                    {account?.name}
                    {t("HonorificSuffix")}
                </Text>
            </FlexDiv>
            <FlexDiv alignItems="center">
                <Profile src={account?.profileImage ?? "/"} size="sm" />
                <Icon type="chevron-down" color={theme.palette.primary[5]} />
            </FlexDiv>
        </FlexDiv>
    );
};
