import { LanguageSelect } from "@features/Language";

import { Button, NavBar } from "@shared/ui";

export const GNB = () => {
    const { selectedMenu, menuList } = NavBar.useNavBar();
    const isLoggedIn = localStorage.getItem("exampleToken");
    return (
        <NavBar selectedMenu={selectedMenu}>
            <NavBar.Logo />
            <NavBar.MenuList>
                {menuList.map((menu, index) => (
                    <NavBar.Menu to={menu.path} key={`${menu.label}-${index}`}>
                        {menu.label}
                    </NavBar.Menu>
                ))}
            </NavBar.MenuList>
            {isLoggedIn ? (
                <NavBar.LoggedInContainer>
                    <div>아이콘</div>
                    <NavBar.Divider />
                </NavBar.LoggedInContainer>
            ) : (
                <NavBar.LoggedOutContainer>
                    <LanguageSelect />
                    <Button variant="secondary" label="Sign in" />
                </NavBar.LoggedOutContainer>
            )}
        </NavBar>
    );
};
