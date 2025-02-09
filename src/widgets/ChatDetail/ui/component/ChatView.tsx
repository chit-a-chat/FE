import { Fragment, useLayoutEffect, useRef } from "react";

import dayjs from "dayjs";

import { useAccountStore } from "@entities/account";
import { useChatStore, useGetChatRoomMessages, useGetChatRooms } from "@entities/chat";

import { FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { ChatMessage } from "./ChatMessage";

type ChatViewProps = {
    selectedRoomId: string;
};

export const ChatView = ({ selectedRoomId }: ChatViewProps) => {
    const theme = useTheme();
    const chatScrollContainer = useRef<HTMLDivElement>(null);
    const { filter } = useChatStore();
    const { account } = useAccountStore();
    const { data: chatRooms } = useGetChatRooms(filter);
    const { data: messages } = useGetChatRoomMessages(selectedRoomId);
    const chatRoom = chatRooms.find((aChatRoom) => aChatRoom.roomId === selectedRoomId);
    const today = dayjs();

    useLayoutEffect(() => {
        if (chatScrollContainer.current?.lastElementChild) {
            chatScrollContainer.current.lastElementChild.scrollIntoView({ behavior: "instant" });
        }
    }, [messages.length]);

    if (!chatRoom || !account) return;
    return (
        <FlexDiv
            direction="column"
            gap={20}
            css={{
                padding: "10px",
                flex: 1,
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                    width: "14px",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: theme.palette.grey[1],
                    borderRadius: "100px",
                    border: "2px solid white",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "transparent",
                },
                "&::-webkit-scrollbar-corner": {
                    background: "traansparent",
                },
            }}
            ref={chatScrollContainer}
        >
            {messages.map((aMessage, index) => {
                const isFirstMessage = index === 0;
                const prevMessageDate = isFirstMessage
                    ? dayjs(0)
                    : dayjs(messages[index - 1].createdAt);
                const currentMessageDate = dayjs(aMessage.createdAt);
                const dayDiff = currentMessageDate.diff(prevMessageDate, "days");

                return (
                    <Fragment
                        key={`${aMessage.sender.id}-${currentMessageDate.toISOString()}-${index}`}
                    >
                        {dayDiff > 0 && (
                            <Text
                                typoVariant="body/medium"
                                color={theme.palette.common.black}
                                css={{ textAlign: "center" }}
                            >
                                {currentMessageDate.isSame(today, "day")
                                    ? "오늘"
                                    : currentMessageDate.format("YY-MM-DD dddd")}
                            </Text>
                        )}
                        <ChatMessage
                            profileUrl={chatRoom?.senders[aMessage.sender.id]?.profileImageUrl}
                            name={aMessage.sender.name}
                            message={aMessage.message}
                            createdAt={aMessage.createdAt}
                            isOwnMessage={account.id === aMessage.sender.id}
                            isRead={dayjs(aMessage.createdAt).diff(chatRoom.lastReadAt) < 0}
                            isSending={Boolean(aMessage.isSending)}
                        />
                    </Fragment>
                );
            })}
        </FlexDiv>
    );
};
