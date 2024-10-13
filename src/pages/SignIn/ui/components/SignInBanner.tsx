import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Icon } from "@shared/Icon";
import { FlexDiv, Text } from "@shared/ui";
import { Logo } from "@shared/ui/NavBar/component/Logo";

import { useTheme } from "@emotion/react";

export const SignInBanner = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { t } = useTranslation("sign_in");
    return (
        <nav
            css={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
            }}
        >
            <Logo />
            <FlexDiv
                onClick={() => {
                    navigate("/");
                }}
                gap={5}
                css={{ height: "fit-content" }}
            >
                <Icon type="arrow-left" color={theme.palette.primary[6]} size="l" />
                <Text
                    typoVariant="link/regular"
                    color={theme.palette.primary[6]}
                    css={{ alignItems: "center", cursor: "pointer" }}
                >
                    {t("BackButton")}
                </Text>
            </FlexDiv>
        </nav>
    );
};
