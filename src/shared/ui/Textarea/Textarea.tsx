import { HTMLProps } from "react";

import { useTheme } from "@emotion/react";

export const Textarea = (props: HTMLProps<HTMLTextAreaElement>) => {
    const theme = useTheme();
    return (
        <textarea
            css={{
                resize: "none",
                borderRadius: "5px",
                border: `1px solid ${theme.palette.grey[5]}`,
                color: theme.palette.grey[7],
                padding: "10px",
                overflow: "hidden",
                ...theme.typo["body/regular"],
                "&::placeholder": {
                    color: theme.palette.grey[5],
                },
            }}
            spellCheck={false}
            defaultValue=""
            {...props}
        />
    );
};
