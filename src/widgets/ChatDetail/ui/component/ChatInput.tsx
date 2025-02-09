import { useRef } from "react";

import { ChatEmojiPicker, SendMessageButton, SendMessageInput } from "@features/Chat";

import { FlexDiv } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const ChatInput = () => {
    const theme = useTheme();
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <FlexDiv
            direction="row"
            gap={10}
            css={{
                margin: "0px 10px 20px",
                padding: "10px",
                border: `1px solid ${theme.palette.grey[3]}`,
                borderRadius: "10px",
                height: "42px",
            }}
        >
            <SendMessageInput ref={inputRef} />
            <FlexDiv direction="row" gap={10} alignItems="center">
                <ChatEmojiPicker targetInputRef={inputRef} />
                <SendMessageButton targetInputRef={inputRef} />
            </FlexDiv>
        </FlexDiv>
    );
};
