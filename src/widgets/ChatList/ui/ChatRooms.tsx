import { PropsWithChildren, Suspense } from "react";

import { Loader } from "@shared/Icon";

import { useTheme } from "@emotion/react";

import { ChatMyProfile } from "./component/ChatMyProfile";
import { ChatRoomFilter } from "./component/ChatRoomFilter";
import { ChatRoomList } from "./component/ChatRoomList";

export const ChatRooms = () => {
    const theme = useTheme();
    return (
        <aside
            css={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px",
                boxShadow: theme.shadow.cardShadow,
                backgroundColor: theme.palette.common.white,
                height: "100%",
                minWidth: 0,
                borderRadius: "10px",
            }}
        >
            <ChatMyProfile />
            <ChatRoomFilter />
            <ChatRoomSuspense>
                <ChatRoomList />
            </ChatRoomSuspense>
        </aside>
    );
};

const ChatRoomSuspense = ({ children }: PropsWithChildren) => {
    return (
        <ol
            css={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flex: 1,
            }}
        >
            <Suspense fallback={<Loader />}>{children}</Suspense>
        </ol>
    );
};
