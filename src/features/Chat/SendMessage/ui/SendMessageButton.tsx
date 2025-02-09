import { RefObject, useCallback } from "react";

import { useChatStore, useSendMessage } from "@entities/chat";

import { Icon } from "@shared/Icon";
import { FlexDiv } from "@shared/ui";

import { useTheme } from "@emotion/react";

type SendMessageButtonProps = {
    targetInputRef: RefObject<HTMLInputElement>;
};

export const SendMessageButton = ({ targetInputRef }: SendMessageButtonProps) => {
    const { selectedRoomId } = useChatStore();
    const { mutate: sendMessage } = useSendMessage(selectedRoomId ?? "");
    const handleSendMessage = useCallback(() => {
        const inputElement = targetInputRef.current;
        if (inputElement && selectedRoomId) {
            const messageToSend = inputElement.value;
            if (messageToSend.length > 0) {
                sendMessage({ message: messageToSend, chatRoomId: selectedRoomId });
                inputElement.value = "";
            }
        }
    }, [selectedRoomId, sendMessage, targetInputRef]);
    const theme = useTheme();
    return (
        <FlexDiv onClick={handleSendMessage}>
            <Icon
                type="send"
                size={"s"}
                color={theme.palette.grey[6]}
                css={{ cursor: "pointer" }}
            />
        </FlexDiv>
    );
};
