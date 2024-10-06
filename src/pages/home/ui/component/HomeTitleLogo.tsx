import { Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const HomeTitleLogo = () => {
    const theme = useTheme();
    return (
        <Text
            typoVariant="display/large"
            color={theme.palette.primary[5]}
            css={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "88.5px",
                lineHeight: "69.15px",
            }}
        >
            CHIT A CHAT
            <svg
                width="386"
                height="19"
                viewBox="0 0 386 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.623111 13.9923C0.624072 11.9081 2.15413 10.1771 4.23112 10.0043C24.4055 8.32528 124.794 0.262056 192.446 0.230686C259.608 0.199542 359.659 7.84761 380.972 9.54008C383.322 9.72662 385.056 11.6824 385.056 14.0389C385.056 16.7026 382.796 18.7956 380.142 18.5636C357.184 16.5569 258.817 8.31378 192.446 8.34708C125.804 8.38051 26.6233 16.2271 4.91741 18.0121C2.57052 18.2051 0.622026 16.3471 0.623111 13.9923Z"
                    fill={theme.palette.yellow[1]}
                />
            </svg>
        </Text>
    );
};
