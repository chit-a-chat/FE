import { HTMLProps } from "react";

import { useTheme } from "@emotion/react";

export const ReviewTextarea = (props: HTMLProps<HTMLTextAreaElement>) => {
    const theme = useTheme();
    return (
        <textarea
            css={{
                resize: "none",
                borderRadius: "5px",
                border: `1px solid ${theme.palette.grey[5]}`,
                color: theme.palette.grey[5],
                padding: "10px",
                overflow: "hidden",
                ...theme.typo["body/regular"],
                "&::placeholder": {
                    color: theme.palette.grey[5],
                },
            }}
            rows={3}
            spellCheck={false}
            defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim."
            {...props}
        />
    );
};
