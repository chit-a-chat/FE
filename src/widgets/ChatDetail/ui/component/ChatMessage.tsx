import dayjs from "dayjs";

import { Loader } from "@shared/Icon";
import { FlexDiv, Profile, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ChatMessageProps = {
    name: string;
    profileUrl: string;
    message: string;
    isOwnMessage: boolean;
    createdAt: string;
    isRead: boolean;
    isSending: boolean;
};
export const ChatMessage = ({
    name,
    profileUrl,
    message,
    createdAt,
    isOwnMessage,
    isRead,
    isSending,
}: ChatMessageProps) => {
    const theme = useTheme();

    if (isOwnMessage) {
        return (
            <FlexDiv direction="row-reverse" gap={10} alignItems="end" css={{ flexShrink: 0 }}>
                <div
                    css={{
                        padding: "10px",
                        backgroundColor: theme.palette.grey[2],
                        borderRadius: "10px",
                    }}
                >
                    <Text typoVariant="supporting/regular" color={theme.palette.common.black}>
                        {message}
                    </Text>
                </div>
                <FlexDiv direction="column" alignItems="end">
                    <Text typoVariant="tag/regular" color={theme.palette.red[4]}>
                        {!isRead && 1}
                    </Text>
                    <Text typoVariant="supporting/regular" color={theme.palette.grey[5]}>
                        {isSending ? <Loader /> : dayjs(createdAt).format("hh:mm")}
                    </Text>
                </FlexDiv>
            </FlexDiv>
        );
    }

    return (
        <FlexDiv direction="row" gap={10} css={{ flexShrink: 0 }}>
            <Profile size="md" src={profileUrl} />
            <FlexDiv direction="column" gap={10}>
                <Text typoVariant="body/bold" color={theme.palette.common.black}>
                    {name}
                </Text>
                <FlexDiv direction="row" gap={10} css={{ alignItems: "center" }}>
                    <Text
                        typoVariant="supporting/regular"
                        color={theme.palette.common.black}
                        css={{
                            padding: "10px",
                            backgroundColor: theme.palette.primary[0],
                            borderRadius: "10px",
                        }}
                    >
                        {message}
                    </Text>
                    <Text typoVariant="supporting/regular" color={theme.palette.grey[5]}>
                        {dayjs(createdAt).format("hh:mm")}
                    </Text>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    );
};
