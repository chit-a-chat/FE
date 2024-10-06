import { PropsWithChildren } from "react";

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
    flex-direction: row;
    align-items: center;
    padding: 0 60px;
`;
type NavBarProps = {
    selectedMenu: string;
};

export const NavBar = ({ children }: PropsWithChildren<NavBarProps>) => {
    return <NavBarContainer>{children}</NavBarContainer>;
};

NavBar.Menu = Menu;
NavBar.MenuList = MenuList;
NavBar.Logo = Logo;
NavBar.useNavBar = useNavBar;
NavBar.ProfileContainer = ProfileContainer;
NavBar.Divider = Divider;
export default NavBar;
