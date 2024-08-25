import { PropsWithChildren } from "react";

import { MenuItem } from "./component/MenuItem/MenuItem";
import { MenuList } from "./component/MenuList/MenuList";

/** TODO: Select 컴포넌트 윤곽 정해지면 구현 2024.08.26 윤동근*/
export const Select = ({ children }: PropsWithChildren) => {
    return <>{children}</>;
};
Select.MenuList = MenuList;
Select.MenuItem = MenuItem;
