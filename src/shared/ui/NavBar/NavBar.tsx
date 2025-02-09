import { PropsWithChildren, useEffect, useState } from "react";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { Divider } from "./component/Divider";
import { Logo } from "./component/Logo";
import { Menu } from "./component/Menu";
import { MenuList } from "./component/MenuList";
import { ProfileContainer } from "./component/ProfileContainer";
import { useNavBar } from "./hooks/useNavBar";

/** 국기 CSS */
import "/node_modules/flag-icons/css/flag-icons.min.css";

const NavBarContainer = styled.header`
    height: 100px;
    display: flex;
    position: sticky;
    top: 0;
    flex-direction: row;
    align-items: center;
    padding: 0 60px;
    z-index: 10;
`;
type NavBarProps = {
    selectedMenu: string;
};

export const NavBar = ({ children }: PropsWithChildren<NavBarProps>) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const theme = useTheme();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <NavBarContainer
            css={{
                borderBottom: isScrolled ? `1px solid ${theme.palette.grey[1]}` : undefined,
                backgroundColor: theme.palette.common.white,
            }}
        >
            {children}
        </NavBarContainer>
    );
};

NavBar.Menu = Menu;
NavBar.MenuList = MenuList;
NavBar.Logo = Logo;
NavBar.useNavBar = useNavBar;
NavBar.ProfileContainer = ProfileContainer;
NavBar.Divider = Divider;
export default NavBar;
