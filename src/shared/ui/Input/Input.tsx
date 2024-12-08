import { InputHTMLAttributes, forwardRef } from "react";

import { useTheme } from "@emotion/react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const theme = useTheme();
    return (
        <input
            css={{
                borderRadius: "8px",
                border: `1px solid ${theme.palette.grey[3]}`,
                color: theme.palette.grey[7],
                padding: "10px",
                ...theme.typo["body/regular"],
                "&::placeholder": {
                    color: theme.palette.grey[5],
                },
                flex: 1,
                height: "42px",
            }}
            ref={ref}
            {...props}
        />
    );
});
