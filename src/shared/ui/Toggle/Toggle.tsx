import { CSSProperties, useState } from "react";

import { useTheme } from "@emotion/react";

type TogglePorps = {
    size: "md";
    defaultValue: boolean;
};

const SizeToContainerStyle: Record<"md", CSSProperties> = {
    md: { width: "64px", height: "32px", padding: "4px" },
} as const;
const SizeToCircleStyle: Record<"md", CSSProperties> = {
    md: { width: "24px", height: "24px" },
} as const;
const SizeToTranslatePx = {
    md: "30px",
} as const;
export const Toggle = ({ size, defaultValue }: TogglePorps) => {
    const [state, setState] = useState<boolean>(defaultValue);
    const toggleState = () => {
        setState((prev) => !prev);
    };
    const theme = useTheme();
    return (
        <label
            css={{
                display: "flex",
                alignItems: "center",
                ...SizeToContainerStyle[size],
                backgroundColor: theme.palette.grey[3],
                border: `1px solid ${theme.palette.grey[2]}`,
                borderRadius: "100px",
                position: "relative",
                cursor: "pointer",
                "& > input": {},
                "& > input:checked + div": {
                    backgroundColor: theme.palette.primary[4],
                    transform: `translateX(${SizeToTranslatePx[size]})`,
                },
                "&:has(> input:checked)": {
                    backgroundColor: theme.palette.primary[2],
                },
            }}
        >
            <input type="checkbox" hidden checked={state} onChange={toggleState} />
            <div
                css={{
                    position: "absolute",
                    backgroundColor: theme.palette.common.white,
                    left: "4px",
                    borderRadius: "100%",
                    transition: "all 0.3s ease-out",
                    ...SizeToCircleStyle[size],
                }}
            />
        </label>
    );
};
