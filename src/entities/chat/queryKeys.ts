import { createQueryKeys } from "@lukemorales/query-key-factory";

export const chatApiQueryKeys = createQueryKeys("chat", {
    all: null,
    list: (roomId: string) => ({
        queryKey: [roomId],
    }),
    roomList: () => ({ queryKey: ["chatRoom"] }),
    initialChatList: (roomId: string) => ({
        queryKey: ["chatList", roomId],
    }),
});
