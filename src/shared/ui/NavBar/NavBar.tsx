import { PropsWithChildren } from "react";

import styled from "@emotion/styled";

import { Divider } from "./component/Divider";
import { LoggedInContainer } from "./component/LoggedInContainer";
import { LoggedOutContainer } from "./component/LoggedOutContainer";
import { Logo } from "./component/Logo";
import { Menu } from "./component/Menu";
import { MenuList } from "./component/MenuList";
import { useNavBar } from "./hooks/useNavBar";

/** 국기 CSS */
import "/node_modules/flag-icons/css/flag-icons.min.css";

const NavBarContainer = styled.header`
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
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
NavBar.LoggedOutContainer = LoggedOutContainer;
NavBar.LoggedInContainer = LoggedInContainer;
NavBar.Divider = Divider;
export default NavBar;
