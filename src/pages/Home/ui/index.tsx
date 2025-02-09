import { useTranslation } from "react-i18next";

import { Footer } from "@widgets/Foooter";
import { HomeMatcheRecommendations } from "@widgets/HomeMatchRecommendations";
import { HomeMatchRequests } from "@widgets/HomeMatchRequests";
import { HomePictureList } from "@widgets/HomePictureList";
import { HomeStatistics } from "@widgets/HomeStatistics";

import { useAccountStore } from "@entities/account";

import { Button, FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { HomeTitleLogo } from "./component/HomeTitleLogo";

export function Home() {
    const { isLoggedIn, account } = useAccountStore();
    const { t } = useTranslation("home");
    const theme = useTheme();
    return (
        <section
            css={{
                display: "flex",
                padding: isLoggedIn ? "92px 60px 0" : "140px 0 auto",
                background: isLoggedIn
                    ? undefined
                    : `linear-gradient(180deg, ${theme.palette.primary[1]}66 0%, ${theme.palette.blue[1]}66 83%)`,
                flexDirection: "column",
                flex: 1,
                gap: isLoggedIn ? "20px" : undefined,
                minHeight: 0,
                height: "calc(100vh - 100px)",
            }}
        >
            {isLoggedIn ? (
                <>
                    <FlexDiv direction="column" alignItems="flex-start" gap={2}>
                        <Text typoVariant="h1/bold">
                            {t("LoginTitle")}
                            {account?.name}
                            {t("NameSuffix")}
                        </Text>
                        <Text typoVariant="h2/medium">{t("LoginSubtitle")}</Text>
                    </FlexDiv>
                    <FlexDiv direction="row" gap={10} css={{ minHeight: 0 }}>
                        <HomeMatcheRecommendations />
                        <HomeMatchRequests />
                    </FlexDiv>
                </>
            ) : (
                <>
                    <FlexDiv
                        direction="column"
                        gap={48}
                        alignItems="center"
                        justifyContent="center"
                        css={{ flex: 1 }}
                    >
                        <FlexDiv direction="column" gap={24}>
                            <FlexDiv direction="column" gap={24}>
                                <FlexDiv gap={5} direction="column" alignItems="center">
                                    <Text
                                        typoVariant="display/large"
                                        color={theme.palette.primary[7]}
                                    >
                                        {t("MainTitle")}
                                    </Text>
                                    <HomeTitleLogo />
                                </FlexDiv>
                                <FlexDiv>
                                    <Text
                                        typoVariant="h4/regular"
                                        color={theme.palette.grey[6]}
                                        css={{ textAlign: "center" }}
                                    >
                                        {t("SubTitle")}
                                    </Text>
                                </FlexDiv>
                            </FlexDiv>
                            <Button
                                label={t("MainButton")}
                                iconRight={{ icon: "search", color: theme.palette.common.white }}
                                size="lg"
                            />
                        </FlexDiv>
                        <FlexDiv direction="column" gap={24}>
                            <HomeStatistics />
                            <HomePictureList />
                        </FlexDiv>
                    </FlexDiv>
                    <Footer />
                </>
            )}
        </section>
    );
}
