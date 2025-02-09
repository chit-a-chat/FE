import { Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type UnreadMessageCountProps = {
    count: number;
};
export const UnreadMessageCount = ({ count }: UnreadMessageCountProps) => {
    const theme = useTheme();
    return (
        <div
            css={{
                width: "20px",
                height: "20px",
                textAlign: "center",
                borderRadius: "100%",
                backgroundColor: theme.palette.red[5],
                flexShrink: 0,
            }}
        >
            <Text typoVariant="supporting/regular" color={theme.palette.font.white}>
                {count}
            </Text>
        </div>
    );
};
