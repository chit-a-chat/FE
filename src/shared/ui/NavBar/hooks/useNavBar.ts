import { useLocation } from "react-router-dom";

const NAV_MENU_LIST = [
    { label: "Home", path: "/" },
    { label: "Explore", path: "/explore" },
    { label: "Matches", path: "/matches" },
    { label: "Community", path: "/community" },
];

export const useNavBar = () => {
    const { pathname: pathName } = useLocation();
    const selectedTab = pathName.split("/")[0];

    return {
        menuList: NAV_MENU_LIST,
        selectedMenu: selectedTab,
    };
};
