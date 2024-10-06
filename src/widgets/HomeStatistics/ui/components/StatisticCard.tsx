import { useTranslation } from "react-i18next";

import { Icons } from "@widgets/components";

import { TIcon } from "@shared/type";
import { FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

type StatisticCardProps = {
    target: "members" | "matches" | "numOfLikes";
};
const TAGET_TO_ICON: Record<StatisticCardProps["target"], TIcon> = {
    members: "user",
    matches: "heart",
    numOfLikes: "user",
} as const;

const TARGET_TO_LABEL = {
    members: "TotalMember",
    matches: "TotalMatches",
    numOfLikes: "TotalLikes",
} as const;

export const StatisticCard = ({ target }: StatisticCardProps) => {
    const { t } = useTranslation("home");
    const theme = useTheme();
    return (
        <FlexDiv direction="column" gap={5} alignItems="flex-start">
            <Text typoVariant="display/large">10 K</Text>
            <FlexDiv gap={4}>
                <Icons type={TAGET_TO_ICON[target]} size="l" color={theme.palette.primary[5]} />
                <Text typoVariant="h4/regular" color={theme.palette.grey[7]}>
                    {t(TARGET_TO_LABEL[target])}
                </Text>
            </FlexDiv>
        </FlexDiv>
    );
};
