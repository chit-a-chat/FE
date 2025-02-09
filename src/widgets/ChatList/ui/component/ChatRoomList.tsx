import { ChatRoom, useChatStore, useGetChatRooms } from "@entities/chat";

export const ChatRoomList = () => {
    const { selectedRoomId, filter } = useChatStore();
    const { data: chatRooms } = useGetChatRooms(filter);

    return chatRooms.map((chatRoom) => {
        const isSelected = selectedRoomId === chatRoom.roomId;
        return (
            <ChatRoom
                key={`chat-room-${chatRoom.roomId}`}
                chatRoom={chatRoom}
                selected={isSelected}
            />
        );
    });
};
