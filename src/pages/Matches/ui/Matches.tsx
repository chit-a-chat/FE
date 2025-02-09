import { ChatDetail } from "@widgets/ChatDetail";
import { ChatRooms } from "@widgets/ChatList";
import { ChatProfile } from "@widgets/ChatProfile";

import { useChatStore } from "@entities/chat";

import { withLogin } from "@shared/lib";

import { useTheme } from "@emotion/react";

export const Matches = withLogin(() => {
    const theme = useTheme();
    const { selectedRoomId } = useChatStore();
    return (
        <article
            css={{
                display: "flex",
                flexDirection: "row",
                padding: "30px 60px",
                backgroundColor: theme.palette.background.grey1,
                flex: 1,
                minHeight: "900px",
                height: "calc(100vh - 100px)",
                "& > *:nth-of-type(1)": {
                    flexBasis: 375,
                },
                "& > *:nth-of-type(2)": {
                    flexBasis: 611,
                    margin: "0 20px 0 12px",
                },
                "& > *:nth-of-type(3)": {
                    flexBasis: 302,
                },
            }}
        >
            <ChatRooms />
            {selectedRoomId && <ChatDetail key={selectedRoomId} selectedRoomId={selectedRoomId} />}
            {selectedRoomId && <ChatProfile selectedRoomId={selectedRoomId} />}
        </article>
    );
});
