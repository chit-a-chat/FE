import { useTranslation } from "react-i18next";

import { ChatRoom } from "@entities/chat/model/model";

import { Icon } from "@shared/Icon";
import { FlexDiv, Profile, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ChatDetailHeaderProps = {
    chatRoom: ChatRoom;
    isTyping?: boolean;
};

export const ChatDetailHeader = ({ chatRoom, isTyping }: ChatDetailHeaderProps) => {
    const theme = useTheme();
    const sender = Object.values(chatRoom.senders)[0];
    const { t } = useTranslation("matches");
    return (
        <FlexDiv direction="row" gap={15} css={{ padding: "10px" }}>
            <Profile src={sender.profileImageUrl} size="md" />
            <FlexDiv direction="column" css={{ flex: 1 }}>
                <FlexDiv direction="row" justifyContent="space-between" alignItems="center">
                    <Text typoVariant="h5/bold" color={theme.palette.common.black}>
                        {sender.name}
                    </Text>
                    <FlexDiv direction="row" gap={4} alignItems="center">
                        <Text typoVariant="link/regular" color={theme.palette.primary[5]}>
                            {t("ChatDetail.Favorite")}
                        </Text>
                        <Icon type="starEmpty" color={theme.palette.primary[6]} />
                    </FlexDiv>
                </FlexDiv>
                <FlexDiv>
                    {isTyping && (
                        <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                            {t("ChatDetail.Typing")}
                        </Text>
                    )}
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    );
};
