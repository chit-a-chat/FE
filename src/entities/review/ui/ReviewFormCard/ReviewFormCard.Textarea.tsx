import { HTMLProps } from "react";

import { Textarea } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const ReviewTextarea = (props: HTMLProps<HTMLTextAreaElement>) => {
    const theme = useTheme();
    return (
        <Textarea
            css={{
                color: theme.palette.grey[5],
            }}
            rows={3}
            defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim."
            {...props}
        />
    );
};
