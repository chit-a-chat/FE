import { forwardRef, useCallback, useRef } from "react";

import { useTranslation } from "react-i18next";

import { useChatStore, useSendMessage } from "@entities/chat";

import { useTheme } from "@emotion/react";

export const SendMessageInput = forwardRef<HTMLInputElement>((_, ref) => {
    const theme = useTheme();
    const { selectedRoomId } = useChatStore();
    const { mutate: sendMessage } = useSendMessage(selectedRoomId ?? "");
    const chatInputRef = useRef<HTMLInputElement | null>();
    const handleSendMessage = useCallback(() => {
        const inputElement = chatInputRef.current;
        if (inputElement && selectedRoomId) {
            const messageToSend = inputElement.value;
            sendMessage({ chatRoomId: selectedRoomId, message: messageToSend });
            inputElement.value = "";
        }
    }, [chatInputRef, selectedRoomId, sendMessage]);
    const { t } = useTranslation("matches");
    return (
        <input
            css={{
                color: theme.palette.grey[7],
                ...theme.typo["body/regular"],
                border: "none",
                outline: "none",
                "&::placeholder": {
                    color: theme.palette.grey[5],
                },
                flex: 1,
            }}
            placeholder={t("ChatDetail.InputPlaceholder")}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    handleSendMessage();
                }
            }}
            ref={(inputElement) => {
                chatInputRef.current = inputElement;
                if (ref) {
                    if (typeof ref === "function") {
                        ref(inputElement); // ref가 함수인 경우
                    } else {
                        ref.current = inputElement; // ref가 객체인 경우
                    }
                }
            }}
        />
    );
});
