import { PropsWithChildren } from "react";

const GNBMenu = ({ children }: PropsWithChildren) => {
    return <div>{children}</div>;
};

const GNBMenuList = ({ children }: PropsWithChildren) => {
    return <nav>{children}</nav>;
};

/** TODO : 로고 생기면 교체 2024.08.11 윤동근 */
const GNBLogo = () => {
    return <div>로고입니다.</div>;
};

export { GNBLogo as Logo, GNBMenu as Menu, GNBMenuList as MenuList };
