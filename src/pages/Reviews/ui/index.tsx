import { useTranslation } from "react-i18next";

import { ReviewFormList } from "@widgets/ReviewFormList";
import { ReviewList } from "@widgets/ReviewList";
import { ReviewRatingStatistics, ReviewTotalStatistics } from "@widgets/ReviewStatistics";

import { Divider, FlexDiv, Tabs, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { ReviewTabContainer } from "./component/ReviewTabContainer";

export const Reviews = () => {
    const theme = useTheme();
    const { t } = useTranslation("reviews");
    return (
        <section
            css={{
                display: "flex",
                flexDirection: "column",
                padding: "30px 60px",
                gap: "30px",
                flex: 1,
            }}
        >
            <FlexDiv direction="column" gap={2}>
                <Text typoVariant="h1/bold" color={theme.palette.grey[8]}>
                    {t("Title")}
                    Reviews
                </Text>
                <Text typoVariant="h2/medium" color={theme.palette.grey[8]}>
                    {t("SubTitle")}
                </Text>
            </FlexDiv>
            <Tabs value={"Received"}>
                <ReviewTabContainer>
                    <Tabs.Tab value={"Received"}>
                        <Text typoVariant="body/regular">{t("ReceivedTab")}</Text>
                    </Tabs.Tab>
                    <Tabs.Tab value={"Send"}>
                        <Text typoVariant="body/regular">{t("SendTab")}</Text>
                    </Tabs.Tab>
                </ReviewTabContainer>
                <Tabs.Content value={"Received"}>
                    <FlexDiv direction="row" justifyContent="center" gap={100}>
                        <ReviewTotalStatistics
                            title={t("Statistics.TotalReviews")}
                            supportText={t("Statistics.TotalReviewsSubscription")}
                            totalValue={256}
                            increase={21}
                        />
                        <ReviewRatingStatistics
                            title={t("Statistics.AverageScore")}
                            supportText={t("Statistics.AverageScoreSubscription")}
                            rate={3.5}
                        />
                    </FlexDiv>
                    <Divider isVertical={false} />
                    <ReviewList />
                </Tabs.Content>

                <Tabs.Content value={"Send"}>
                    <FlexDiv direction="row" justifyContent="center" gap={100}>
                        <ReviewTotalStatistics
                            title={t("Statistics.TotalMatches")}
                            supportText={t("Statistics.TotalMatcchesSubscription")}
                            totalValue={5555}
                            increase={100}
                        />
                        <ReviewRatingStatistics
                            title={t("Statistics.TotalReviews")}
                            supportText={t("Statistics.AverageScoreSubscription")}
                            rate={3.5}
                        />
                    </FlexDiv>
                    <Divider isVertical={false} />
                    <ReviewFormList />
                </Tabs.Content>
            </Tabs>
        </section>
    );
};
