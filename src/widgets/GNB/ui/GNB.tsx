import { useTranslation } from "react-i18next";

import { Button } from "@widgets/components";

import { LanguageSelect } from "@features/Language";

import { NavBar } from "@shared/ui";

export const GNB = () => {
    const { selectedMenu, menuList } = NavBar.useNavBar();
    const isLoggedIn = localStorage.getItem("exampleToken");
    const { t } = useTranslation("common");
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
                        <div>아이콘</div>
                        <NavBar.Divider />
                    </>
                ) : (
                    <>
                        <LanguageSelect />
                        <Button variant="secondary" label={t("GNB.SignInBtn")} />
                    </>
                )}
            </NavBar.ProfileContainer>
        </NavBar>
    );
};
