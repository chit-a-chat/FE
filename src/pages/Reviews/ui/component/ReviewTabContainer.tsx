import { PropsWithChildren } from "react";

import { FlexDiv } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const ReviewTabContainer = ({ children }: PropsWithChildren) => {
    const theme = useTheme();
    return (
        <FlexDiv
            direction="row"
            gap={13}
            css={{
                "& > .Tab": {
                    display: "flex",
                    padding: "10px",
                    justifyContent: "center",
                    flex: 1,
                    boxShadow: theme.shadow.cardShadow,
                    borderRadius: "10px",
                    "&[data-selected]": {
                        boxShadow: theme.shadow.tabPurpleShadow,
                    },
                },
            }}
        >
            {children}
        </FlexDiv>
    );
};
