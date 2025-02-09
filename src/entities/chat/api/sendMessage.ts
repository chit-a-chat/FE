import { useRef } from "react";

import axios from "axios";
import dayjs from "dayjs";

import { useAccountStore } from "@entities/account";
import { queryKeys } from "@entities/queryKeys";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ChatRoom, Message } from "../model/model";

type Res = {
    data: boolean;
};
type sendMessageProps = { chatRoomId: string; message: string };

const sendMessage = async (props: sendMessageProps) => {
    const { chatRoomId, message } = props;
    const res = await axios.post<Res>(`mock/chat/${chatRoomId}`, {
        data: message,
    });
    const messages = res.data.data;

    return { isSuccess: messages, message };
};

export const useSendMessage = (chatRoomId: string) => {
    const queryClient = useQueryClient();
    const { account } = useAccountStore();
    const messageIndex = useRef<number>();
    return useMutation({
        mutationFn: sendMessage,
        onMutate(data) {
            const { message } = data;
            const oldChats = queryClient.getQueryData<Omit<Message, "roomId">[]>(
                queryKeys.chat.initialChatList(chatRoomId).queryKey
            );
            const isBlankMessage = message.length === 0;
            if (!oldChats) return;
            if (!account) return;
            if (isBlankMessage) return;
            messageIndex.current = oldChats.length;
            queryClient.setQueryData<Omit<Message, "roomId">[]>(
                queryKeys.chat.initialChatList(chatRoomId).queryKey,
                [
                    ...oldChats,
                    {
                        sender: { id: account.id, name: account.name },
                        message: message,
                        createdAt: dayjs().toISOString(),
                        isSending: true,
                    },
                ]
            );
        },
        onSuccess: ({ isSuccess, message }) => {
            if (isSuccess) {
                const oldChats = queryClient.getQueryData<Omit<Message, "roomId">[]>(
                    queryKeys.chat.initialChatList(chatRoomId).queryKey
                );
                const chatRooms = queryClient.getQueryData<Record<string, ChatRoom>>(
                    queryKeys.chat.roomList().queryKey
                );
                if (!oldChats) return;
                if (!chatRooms) return;
                if (!account) return;
                if (!messageIndex.current) return;
                const newChats = [...oldChats];
                newChats[messageIndex.current] = {
                    ...newChats[messageIndex.current],
                    createdAt: dayjs().toISOString(),
                    isSending: undefined,
                };
                queryClient.setQueryData<Omit<Message, "roomId">[]>(
                    queryKeys.chat.initialChatList(chatRoomId).queryKey,
                    newChats
                );
                queryClient.setQueryData<Record<string, ChatRoom>>(
                    queryKeys.chat.roomList().queryKey,
                    {
                        ...chatRooms,
                        [chatRoomId]: {
                            ...chatRooms[chatRoomId],
                            currentMessage: message,
                            updatedAt: dayjs().toISOString(),
                        },
                    }
                );
            }
        },
    });
};
