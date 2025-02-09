import { HttpHandler, HttpResponse, WebSocketHandler, http } from "msw";

import { dummyMessages, dummyRooms } from "@entities/chat/model/dummy";
import { Message } from "@entities/chat/model/model";

export const chatAPIs: (HttpHandler | WebSocketHandler)[] = [
    http.get<object>("/mock/chatrooms", () => {
        return HttpResponse.json({
            data: dummyRooms,
        });
    }),
    http.delete<object>("/mock/chatrooms", () => {
        return HttpResponse.json({
            data: { isSuccess: true },
        });
    }),
    http.get<{ id: string }>("/mock/chat/:id", ({ params }) => {
        const roomId = params.id as keyof typeof dummyMessages;
        const insertedMessages: Omit<Message, "roomId">[] = dummyMessages[roomId].messages;
        return HttpResponse.json({
            data: insertedMessages,
        });
    }),
    http.post<{ id: string }>("/mock/chat/:id", () => {
        // const roomId = params.id as keyof typeof dummyMessages;
        return HttpResponse.json({
            data: true,
        });
    }),
];
