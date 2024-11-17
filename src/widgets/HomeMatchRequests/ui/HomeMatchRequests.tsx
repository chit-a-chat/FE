import { useTranslation } from "react-i18next";

import { MatchRequestList, useMatchRequests } from "@entities/match";

import { Badge, FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";

export const HomeMatchRequests = () => {
    const theme = useTheme();
    const { getMatchRequests } = useMatchRequests();
    const { data: matchRequests } = useQuery({
        queryKey: ["test23"],
        queryFn: getMatchRequests,
        initialData: { matchRequests: [] },
        initialDataUpdatedAt: 0,
    });
    const { t } = useTranslation("home");
    return (
        <FlexDiv
            direction="column"
            gap={10}
            css={{
                flex: 1,
                paddingTop: "10px",
                backgroundColor: theme.palette.common.white,
                boxShadow: theme.shadow.cardShadow,
                borderRadius: "10px",
                position: "relative",
            }}
        >
            <FlexDiv alignItems="center" gap={10} css={{ paddingLeft: "20px" }}>
                <Text typoVariant="h3/medium" color={theme.palette.common.black}>
                    {t("UpdateTitle")}
                </Text>

                <Text
                    css={{
                        padding: "5px 12px",
                        gap: "10px",
                        backgroundColor: theme.palette.primary[0],
                        borderRadius: "30px",
                    }}
                    typoVariant="tag/regular"
                    color={theme.palette.common.black}
                >
                    {matchRequests.matchRequests.length}
                </Text>
            </FlexDiv>
            <FlexDiv direction="row" gap={10} css={{ paddingLeft: "20px" }}>
                <Badge
                    radius="full"
                    fontVariant="tag/regular"
                    color={theme.palette.common.black}
                    isShadow
                >
                    {t("MatchRequestBadge")}
                </Badge>
                <Badge
                    radius="full"
                    fontVariant="tag/regular"
                    color={theme.palette.common.black}
                    isShadow
                >
                    {t("ReceivedLikeBadge")}
                </Badge>
            </FlexDiv>
            <MatchRequestList />
        </FlexDiv>
    );
};
