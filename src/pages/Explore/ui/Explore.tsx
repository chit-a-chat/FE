import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ExploreDetails } from "@widgets/ExploreDetails";

import { Icon } from "@shared/Icon";
import { withLogin } from "@shared/lib";
import { Button, FlexDiv, Text } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const Explore = withLogin(() => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { t } = useTranslation("explore");
    return (
        <article
            css={{
                display: "flex",
                flexDirection: "column",
                padding: "30px 60px",
                gap: "10px",
                backgroundColor: theme.palette.primary[0],
                flex: 1,
                minWidth: 0,
            }}
        >
            <FlexDiv
                direction="row"
                gap={5}
                alignItems="center"
                css={{ cursor: "pointer", width: "fit-content" }}
                onClick={() => {
                    navigate("/");
                }}
            >
                <Icon type="arrow-left" color={theme.palette.primary[5]} />
                <Text typoVariant="label/regular" color={theme.palette.primary[5]}>
                    {t("BackHomeButton")}
                </Text>
            </FlexDiv>
            <FlexDiv direction="row" justifyContent="space-between" alignItems="center">
                <Text typoVariant="h1/bold" color={theme.palette.common.black}>
                    {t("Title")}
                </Text>
                <Button
                    iconLeft={{ icon: "adjustments-horizontal", color: theme.palette.primary[6] }}
                    variant="secondary"
                    label={t("PreferenceButton")}
                    size="md"
                />
            </FlexDiv>
            <ExploreDetails />
        </article>
    );
});
