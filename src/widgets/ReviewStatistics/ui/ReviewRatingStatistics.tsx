import { FlexDiv, StarRating, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ReviewRatingStatisticsProps = {
    title: string;
    rate: number;
    supportText: string;
};

export const ReviewRatingStatistics = ({
    title,
    rate,
    supportText,
}: ReviewRatingStatisticsProps) => {
    const theme = useTheme();
    return (
        <FlexDiv direction="column" gap={5}>
            <Text typoVariant="h3/medium" color={theme.palette.grey[7]}>
                {title}
            </Text>
            <FlexDiv direction="row" gap={10} alignItems="center">
                <Text typoVariant="h2/medium" color={theme.palette.grey[8]}>
                    {rate}
                </Text>
                <StarRating rate={3.5} />
            </FlexDiv>
            <Text typoVariant="supporting/regular" color={theme.palette.grey[4]}>
                {supportText}
            </Text>
        </FlexDiv>
    );
};
