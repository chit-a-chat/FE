import { useTheme } from "@emotion/react";

type DividerProps = {
    isVertical?: boolean;
    thickness?: number;
    color?: string;
};

export const Divider = ({ isVertical = false, thickness = 1, color }: DividerProps) => {
    const theme = useTheme();
    return (
        <div
            css={{
                width: isVertical ? `${thickness}px` : "100%",
                height: isVertical ? "100%" : `${thickness}px`,
                backgroundColor: color || theme.palette.grey[1],
            }}
        />
    );
};
