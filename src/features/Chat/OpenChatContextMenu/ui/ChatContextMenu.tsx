import { useTranslation } from "react-i18next";

import { Backdrop, FlexDiv, Portal, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ChatContextMenuProps = {
    position: { x: number; y: number };
    handleCloseContextMenu: () => void;
    handleOpenDeleteChatRoomModal: () => void;
};

export const ChatContextMenu = ({
    position,
    handleCloseContextMenu,
    handleOpenDeleteChatRoomModal,
}: ChatContextMenuProps) => {
    const theme = useTheme();
    const { t } = useTranslation("matches");
    return (
        <Portal
            zIndex={99}
            container={document.body}
            position={{ left: position.x, top: position.y }}
        >
            <Backdrop onClick={handleCloseContextMenu} />
            <FlexDiv
                direction="column"
                css={{
                    backgroundColor: theme.palette.common.white,
                    borderRadius: "10px",
                    boxShadow: theme.shadow.cardShadow,
                    padding: "10px",
                    gap: "10px",
                    "& > div": {
                        padding: "8px 10px",
                        borderRadius: "8px",
                        gap: "6px",
                        alignItems: "center",
                        cursor: "pointer",
                        "&:hover": {
                            backgroundColor: theme.palette.primary[0],
                        },
                    },
                }}
            >
                <FlexDiv onClick={handleCloseContextMenu}>
                    <Text typoVariant="supporting/regular" color={theme.palette.grey[8]}>
                        {t("ChatRoom.AddFavorite")}
                    </Text>
                </FlexDiv>
                <FlexDiv onClick={handleOpenDeleteChatRoomModal}>
                    <Text typoVariant="supporting/regular" color={theme.palette.grey[8]}>
                        {t("ChatRoom.EndConversation")}
                    </Text>
                </FlexDiv>
            </FlexDiv>
        </Portal>
    );
};
