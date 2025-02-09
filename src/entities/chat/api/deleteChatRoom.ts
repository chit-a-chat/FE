import axios from "axios";

import { queryKeys } from "@entities/queryKeys";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ChatRoom } from "../model/model";

type Res = {
    data: { isSuccess: boolean };
};

const deleteChatRoom = async (roomId: string): Promise<{ isSuccess: boolean; roomId: string }> => {
    const res = (await axios.delete<Res>("/mock/chatrooms")).data.data;
    return { isSuccess: res.isSuccess, roomId: roomId };
};

export const useDeleteChatRoom = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteChatRoom,
        onSuccess: ({ isSuccess, roomId }) => {
            if (isSuccess) {
                const chatRooms = queryClient.getQueryData<Record<string, ChatRoom>>(
                    queryKeys.chat.roomList().queryKey
                );
                const filteredChatRooms = { ...chatRooms };
                delete filteredChatRooms[roomId];
                queryClient.setQueryData<Record<string, ChatRoom>>(
                    queryKeys.chat.roomList().queryKey,
                    filteredChatRooms
                );
            }
        },
    });
};
