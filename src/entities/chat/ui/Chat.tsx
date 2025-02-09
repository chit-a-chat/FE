import { Profile } from "@shared/ui";

import { ChatRoom } from "../model/model";

type ChatProps = {
    chatRoom: ChatRoom;
};

export const Chat = ({ chatRoom }: ChatProps) => {
    const senders = Object.values(chatRoom.senders);
    const senderProfileImageUrl = senders.length > 0 ? senders[0].profileImageUrl : null;
    return (
        <li
            css={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                borderRadius: "10px",
                padding: "10px",
            }}
        >
            <Profile size="md" src={senderProfileImageUrl} />
        </li>
    );
};
