import { Suspense, useRef } from "react";

import { useChatStore, useGetChatRooms } from "@entities/chat";

import { Loader } from "@shared/Icon";
import { Divider, FlexDiv } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { ChatDetailHeader } from "./component/ChatDetailHeader";
import { ChatInput } from "./component/ChatInput";
import { ChatView } from "./component/ChatView";

type ChatDetailProps = {
    selectedRoomId: string;
};

export const ChatDetail = ({ selectedRoomId }: ChatDetailProps) => {
    const theme = useTheme();
    const { filter } = useChatStore();
    const ref = useRef<HTMLElement>(null);
    const { data: chatRooms } = useGetChatRooms(filter);
    const chatRoom = chatRooms.find((aChatRoom) => aChatRoom.roomId === selectedRoomId);
    return (
        <aside
            css={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: theme.shadow.cardShadow,
                backgroundColor: theme.palette.common.white,
                borderRadius: "10px",
                minHeight: 0,
            }}
            ref={ref}
        >
            {chatRoom && selectedRoomId ? (
                <FlexDiv direction="column" css={{ flex: 1, minHeight: 0 }}>
                    <ChatDetailHeader chatRoom={chatRoom} />
                    <Divider />
                    <Suspense fallback={<Loader />}>
                        <ChatView selectedRoomId={selectedRoomId} />
                    </Suspense>
                    <ChatInput />
                </FlexDiv>
            ) : (
                <FlexDiv justifyContent="center" alignItems="center" css={{ flex: 1 }}>
                    No Selected ChatRoom
                </FlexDiv>
            )}
        </aside>
    );
};
