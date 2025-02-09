import { useTranslation } from "react-i18next";

import { Icon } from "@shared/Icon";
import { FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const ChatRoomFilter = () => {
    const theme = useTheme();
    const { t } = useTranslation("matches");
    return (
        <FlexDiv direction="row" justifyContent="space-between" alignItems="center">
            <Text typoVariant="h4/regular" color={theme.palette.common.black}>
                {t("ChatRoom.Title")}
            </Text>
            <FlexDiv direction="row" gap={4} alignItems={"center"}>
                <Icon type="adjustments-horizontal" size="m" color={theme.palette.primary[5]} />
                <Text typoVariant="link/regular" color={theme.palette.primary[5]}>
                    {t("ChatRoom.Filter")}
                </Text>
            </FlexDiv>
        </FlexDiv>
    );
};
