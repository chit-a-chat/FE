import { FlexDiv } from "@shared/ui";

import { StatisticCard } from "./components/StatisticCard";

export const HomeStatistics = () => {
    return (
        <FlexDiv direction="row" gap={100}>
            <StatisticCard target="members" />
            <StatisticCard target="matches" />
            <StatisticCard target="numOfLikes" />
        </FlexDiv>
    );
};
