import { RefObject, useCallback, useState } from "react";

import EmojiPicker from "emoji-picker-react";

import { Icon } from "@shared/Icon";
import { FlexDiv } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ChatEmojiPickerProps = {
    targetInputRef: RefObject<HTMLInputElement>;
};

export const ChatEmojiPicker = ({ targetInputRef }: ChatEmojiPickerProps) => {
    const [isEmoji, setIsEmoji] = useState<boolean>(false);
    const theme = useTheme();
    const handleToggleEmoji = useCallback(() => {
        setIsEmoji((prev) => !prev);
    }, []);
    return (
        <FlexDiv css={{ position: "relative" }}>
            <div onClick={handleToggleEmoji}>
                <Icon
                    type="smile"
                    size={"s"}
                    color={theme.palette.grey[6]}
                    css={{ cursor: "pointer" }}
                />
            </div>
            <div
                hidden={!isEmoji}
                style={{ position: "absolute", left: "0", bottom: "calc(100% + 13px)" }}
            >
                <EmojiPicker
                    skinTonesDisabled={true}
                    searchDisabled={true}
                    allowExpandReactions={false}
                    autoFocusSearch={false}
                    previewConfig={{ showPreview: false }}
                    onEmojiClick={(emoji) => {
                        const emojiString = emoji.emoji;
                        const inputElement = targetInputRef.current;
                        if (inputElement) {
                            const { selectionStart, selectionEnd } = inputElement;
                            const inputValue = inputElement.value;

                            if (!(selectionStart && selectionEnd)) {
                                inputElement.value = inputElement.value + emojiString;
                            } else {
                                const textBefore = inputValue.slice(0, selectionStart ?? undefined); // 커서 앞 텍스트
                                const textAfter = inputValue.slice(selectionEnd ?? undefined); // 커서 뒤 텍스트

                                inputElement.value = textBefore + emoji.emoji + textAfter;
                            }
                            handleToggleEmoji();
                            setTimeout(() => {
                                inputElement.focus();
                                const selectionPosition =
                                    (selectionStart ?? 0) + emojiString.length;
                                inputElement.setSelectionRange(
                                    selectionPosition,
                                    selectionPosition
                                );
                            }, 0);
                        }
                    }}
                />
            </div>
        </FlexDiv>
    );
};
