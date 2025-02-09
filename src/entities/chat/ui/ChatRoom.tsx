import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import dayjs from "dayjs";

import { ChatContextMenu, DeleteChatRoomModal, useChatContextMenu } from "@features/Chat";

import { Icon } from "@shared/Icon";
import { FlexDiv, Profile, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { useReadRoomMessage } from "../api/readRoomMessage";
import { ChatRoom as TChatRoom } from "../model/model";
import { useChatStore } from "../model/store";
import { displayChatUpdatedAt } from "../utils/displayChatUpdatedAt";
import { UnreadMessageCount } from "./component/UnreadMessageCount";

type ChatProps = {
    chatRoom: TChatRoom;
    selected: boolean;
};

export const ChatRoom = ({ chatRoom, selected }: ChatProps) => {
    const theme = useTheme();
    const senders = Object.values(chatRoom.senders);
    const { selectRoom, selectedRoomId, deleteRoom } = useChatStore();
    const { mutate: readChatRoomMessage } = useReadRoomMessage();
    const {
        handleOpenRoomContextMenu,
        isContextMenuOpen,
        contextMenuPosition,
        handleCloseContextMenu,
        isDeleteModal,
        handleOpenDeleteModal,
        handleCloseDeleteModal,
        handleClickDelete,
    } = useChatContextMenu(deleteRoom);
    const { t } = useTranslation("matches");
    useEffect(() => {
        if (selectedRoomId) readChatRoomMessage(selectedRoomId);
    }, [selectedRoomId, readChatRoomMessage]);
    if (senders.length < 1) return;
    const { profileImageUrl, name } = senders[0];
    const isUnreadMessage = chatRoom.unReadCount > 0;
    return (
        <li
            css={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                borderRadius: "10px",
                padding: "10px",
                cursor: "pointer",
                boxShadow: selected ? theme.shadow.tabPurpleShadow : undefined,
            }}
            onClick={() => {
                selectRoom(chatRoom.roomId, chatRoom);
            }}
            onContextMenu={(e) => {
                handleOpenRoomContextMenu(e, chatRoom.roomId);
            }}
        >
            {isContextMenuOpen && (
                <ChatContextMenu
                    position={contextMenuPosition}
                    handleCloseContextMenu={handleCloseContextMenu}
                    handleOpenDeleteChatRoomModal={handleOpenDeleteModal}
                />
            )}
            {isDeleteModal && (
                <DeleteChatRoomModal
                    handleCloseDeleteModal={handleCloseDeleteModal}
                    handleClickDelete={handleClickDelete}
                />
            )}
            <Profile size="md" src={profileImageUrl} />
            <FlexDiv direction="column" gap={6} css={{ flex: 1, minWidth: 0 }}>
                <FlexDiv direction="row" justifyContent="space-between">
                    <Text typoVariant="h5/bold" color={theme.palette.common.black}>
                        {name}
                    </Text>
                    <Text typoVariant="body/regular" color={theme.palette.grey[5]}>
                        {displayChatUpdatedAt(
                            dayjs(chatRoom.updatedAt),
                            t("ChatRoom.Message.TimeSuffix.minute"),
                            t("ChatRoom.Message.TimeSuffix.hour"),
                            t("ChatRoom.Message.TimeSuffix.now")
                        )}
                    </Text>
                </FlexDiv>
                <FlexDiv direction="row" justifyContent="space-between">
                    <Text
                        typoVariant="body/regular"
                        color={theme.palette.grey[5]}
                        css={{
                            whiteSpace: "nowrap",
                            overflowX: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {chatRoom.currentMessage}
                    </Text>
                    {isUnreadMessage ? (
                        <UnreadMessageCount count={chatRoom.unReadCount} />
                    ) : (
                        <Icon
                            type="checks"
                            color={theme.palette.primary[6]}
                            css={{ flexShrink: 0 }}
                        />
                    )}
                </FlexDiv>
            </FlexDiv>
        </li>
    );
};
