import { create } from "zustand";

import { ChatRoom } from "./model";

type ChatFilter = "DATE_ASC" | "DATE_DESC" | "FAVORITE";

interface ChatStore {
    selectedChatRoom: ChatRoom | null;
    chatRoomIdFiltered: string[];
    filter: ChatFilter;
    selectedRoomId: null | string;
    selectRoom: (roomId: string, room: ChatRoom) => void;
    addChatRooms: () => Promise<void>;
    deleteRoom: () => Promise<void>;
}

export const useChatStore = create<ChatStore>((set, get) => ({
    selectedChatRoom: null,
    chatRoomIdFiltered: [],
    filter: "DATE_DESC" as const,
    selectedRoomId: null,
    addChatRooms: async () => {},
    changeFilter: (filter: ChatFilter) => {
        if (filter !== get().filter) set({ filter: filter });
    },
    selectRoom: (roomId, room) => {
        set({ selectedRoomId: roomId, selectedChatRoom: room });
    },
    deleteRoom: async () => {
        set({ selectedRoomId: null, selectedChatRoom: null });
    },
}));
