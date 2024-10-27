import { MatchRecommendationList } from "@entities/match";

import { FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const HomeMatcheRecommendations = () => {
    const theme = useTheme();
    return (
        <FlexDiv
            direction="column"
            css={{
                boxShadow: "0px 0px 6px #0000001a, 0px 0px 10px #0000001a",
                borderRadius: "10px",
                background: theme.palette.background.white,
                paddingTop: "10px",
                flex: 1,
                position: "relative",
            }}
        >
            <Text
                typoVariant="h3/medium"
                color={theme.palette.common.black}
                css={{ paddingLeft: "20px" }}
            >
                Today's match recommendation
            </Text>
            <MatchRecommendationList />
        </FlexDiv>
    );
};
