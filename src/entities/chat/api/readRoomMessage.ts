import { useAccountStore } from "@entities/account";
import { queryKeys } from "@entities/queryKeys";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ChatRoom } from "../model/model";

// type readRoomMessagesProps = { chatRoomId: string };

const readRoomMessages = async (chatRoomId: string) => {
    // const { chatRoomId } = props;
    // const res = await axios.post<Res>(`mock/chat/${chatRoomId}`, {
    //     data: message,
    // });
    // const messages = res.data.data;

    return { chatRoomId: chatRoomId };
};

export const useReadRoomMessage = () => {
    const queryClient = useQueryClient();
    const { account } = useAccountStore();
    return useMutation({
        mutationFn: readRoomMessages,
        onMutate(chatRoomId) {
            if (!account) return;
            const chatRoomListQueryKey = queryKeys.chat.roomList().queryKey;
            const chatRooms =
                queryClient.getQueryData<Record<string, ChatRoom>>(chatRoomListQueryKey);
            if (!chatRooms) return;
            queryClient.setQueryData<Record<string, ChatRoom>>(chatRoomListQueryKey, {
                ...chatRooms,
                [chatRoomId]: {
                    ...chatRooms[chatRoomId],
                    unReadCount: 0,
                },
            });
        },
        onSuccess: () => {},
    });
};
