import { FlexDiv } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ProfileIndicatorProps = {
    selectedIndex: number;
    totalIndex: number;
    onClickIndicator: (index: number) => void;
};
export const ProfileIndicator = ({
    selectedIndex,
    totalIndex,
    onClickIndicator,
}: ProfileIndicatorProps) => {
    const theme = useTheme();
    return (
        <FlexDiv
            direction="column"
            css={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                gap: "4px",
            }}
        >
            {Array.from({ length: totalIndex }, (_, index) => (
                <div
                    className={selectedIndex === index ? "checked" : undefined}
                    css={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "8px",
                        backgroundColor: theme.palette.primary[2],
                        "&.checked": {
                            height: "30px",
                            backgroundColor: theme.palette.primary[0],
                            pointerEvents: "none",
                        },
                        cursor: "pointer",
                    }}
                    key={`profile-image-${index}`}
                    onClick={() => {
                        onClickIndicator(index);
                    }}
                />
            ))}
        </FlexDiv>
    );
};
