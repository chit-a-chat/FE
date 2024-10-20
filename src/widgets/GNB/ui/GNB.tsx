import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button } from "@widgets/components";

import { LanguageSelect } from "@features/Language";

import { AccountProfile, useAccountStore } from "@entities/account";

import { Icon } from "@shared/Icon";
import { NavBar } from "@shared/ui";

import { useTheme } from "@emotion/react";

export const GNB = () => {
    const { selectedMenu, menuList } = NavBar.useNavBar();
    const { isLoggedIn, logout } = useAccountStore();
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
                        <AccountProfile />
                        <Button
                            variant="secondary"
                            label={"임시 로그아웃"}
                            onClick={() => {
                                logout();
                            }}
                        />
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
