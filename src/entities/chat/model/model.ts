export interface ChatSender {
    id: string;
    name: string;
    profileImageUrl: string;
}

export interface Message {
    roomId: string;
    sender: Omit<ChatSender, "profileImageUrl">;
    message: string;
    createdAt: string;
    isSending?: true;
}

export interface ChatRoom {
    roomId: string;
    senders: Record<string, ChatSender>;
    messages: Omit<Message, "roomId">[];
    unReadCount: number;
    currentMessage: string;
    isFavorite: boolean;
    lastReadAt: string;
    createdAt: string;
    updatedAt: string;
}

export type ChatFilter = "DATE_ASC" | "DATE_DESC" | "FAVORITE";
