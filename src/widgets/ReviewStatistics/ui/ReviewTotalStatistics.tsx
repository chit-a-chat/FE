import { Icon } from "@shared/Icon";
import { Badge, FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type ReviewTotalStatisticsProps = {
    title: string;
    totalValue: number;
    increase: number;
    supportText: string;
};

export const ReviewTotalStatistics = ({
    title,
    totalValue,
    increase,
    supportText,
}: ReviewTotalStatisticsProps) => {
    const theme = useTheme();
    return (
        <FlexDiv direction="column" gap={5}>
            <Text typoVariant="h3/medium" color={theme.palette.grey[7]}>
                {title}
            </Text>
            <FlexDiv direction="row" gap={10} alignItems="center">
                <Text typoVariant="h2/medium" color={theme.palette.grey[8]}>
                    {totalValue}
                </Text>
                <Badge
                    radius="full"
                    backgroundColor={theme.palette.primary[0]}
                    color={theme.palette.primary[6]}
                    gap={2}
                >
                    {increase}% <Icon type="trending-up" color={theme.palette.primary[6]} />
                </Badge>
            </FlexDiv>
            <Text typoVariant="supporting/regular" color={theme.palette.grey[4]}>
                {supportText}
            </Text>
        </FlexDiv>
    );
};
