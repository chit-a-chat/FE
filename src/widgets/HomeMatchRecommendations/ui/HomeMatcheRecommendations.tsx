import { useTranslation } from "react-i18next";

import { MatchRecommendationList } from "@entities/match";

import { FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const HomeMatcheRecommendations = () => {
    const theme = useTheme();
    const { t } = useTranslation("home");
    return (
        <FlexDiv
            direction="column"
            css={{
                boxShadow: theme.shadow.cardShadow,
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
                {t("RecommendationTitle")}
            </Text>
            <MatchRecommendationList />
        </FlexDiv>
    );
};
