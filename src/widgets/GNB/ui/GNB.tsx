import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { GNBMyProfile } from "@widgets/GNBMyProfile";

import { LanguageSelect } from "@features/Language";

import { useAccountStore } from "@entities/account";

import { Icon } from "@shared/Icon";
import { Button, NavBar } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const GNB = () => {
    const { selectedMenu, menuList } = NavBar.useNavBar();
    const { isLoggedIn } = useAccountStore();
    const theme = useTheme();
    const { t } = useTranslation("common");
    const navigate = useNavigate();
    return (
        <NavBar selectedMenu={selectedMenu}>
            <NavBar.Logo />
            <NavBar.MenuList>
                {menuList.map((menu, index) => (
                    <NavBar.Menu to={menu.path} key={`${menu.label}-${index}`}>
                        {t(`GNB.${menu.label}`)}
                    </NavBar.Menu>
                ))}
            </NavBar.MenuList>
            <NavBar.ProfileContainer isLoggedIn>
                {isLoggedIn ? (
                    <>
                        <Icon type="bell-filled" color={theme.palette.primary[5]} size={"m"} />
                        <NavBar.Divider />
                        <GNBMyProfile />
                    </>
                ) : (
                    <>
                        <LanguageSelect />
                        <Button
                            variant="secondary"
                            label={t("GNB.SignInBtn")}
                            onClick={() => {
                                navigate("/sign-in");
                            }}
                        />
                    </>
                )}
            </NavBar.ProfileContainer>
        </NavBar>
    );
};
