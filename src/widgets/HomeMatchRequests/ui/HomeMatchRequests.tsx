import { useTranslation } from "react-i18next";

import { MatchLikeList, MatchRequestList, useMatchRequests } from "@entities/match";

import { Badge, FlexDiv, Tabs, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";

export const HomeMatchRequests = () => {
    const theme = useTheme();
    const { getMatchRequests, getLikeList } = useMatchRequests();
    const { data: matchRequests } = useQuery({
        queryKey: ["test23"],
        queryFn: getMatchRequests,
        initialData: { matchRequests: [] },
        initialDataUpdatedAt: 0,
    });
    const { data: likeList } = useQuery({
        queryKey: ["test56"],
        queryFn: getLikeList,
        initialData: { likeList: [] },
        initialDataUpdatedAt: 0,
    });
    const { t } = useTranslation("home");
    return (
        <Tabs value={"requests"}>
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
                        {matchRequests.matchRequests.length + likeList.likeList.length}
                    </Text>
                </FlexDiv>
                <FlexDiv direction="row" gap={10} css={{ paddingLeft: "20px" }}>
                    <Tabs.Tab
                        value={"requests"}
                        css={{
                            "& > div": {
                                boxShadow: theme.shadow.tabCommonShadow,
                            },
                            "&[data-selected=true] > div": {
                                boxShadow: theme.shadow.tabPurpleShadow,
                            },
                        }}
                    >
                        <Badge
                            size="lg"
                            radius="full"
                            fontVariant="tag/regular"
                            color={theme.palette.common.black}
                        >
                            {t("MatchRequestBadge")}
                        </Badge>
                    </Tabs.Tab>
                    <Tabs.Tab
                        value={"likes"}
                        css={{
                            "& > div": {
                                boxShadow: theme.shadow.tabCommonShadow,
                            },
                            "&[data-selected=true] > div": {
                                boxShadow: theme.shadow.tabPurpleShadow,
                            },
                        }}
                    >
                        <Badge
                            size="lg"
                            radius="full"
                            fontVariant="tag/regular"
                            color={theme.palette.common.black}
                        >
                            {t("ReceivedLikeBadge")}
                        </Badge>
                    </Tabs.Tab>
                </FlexDiv>
                <Tabs.Content value={"requests"}>
                    <MatchRequestList />
                </Tabs.Content>
                <Tabs.Content value={"likes"}>
                    <MatchLikeList />
                </Tabs.Content>
            </FlexDiv>
        </Tabs>
    );
};
