import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

import { Content } from "./Tabs.Content";
import { Tab } from "./Tabs.Tab";

const TabContext = createContext<{
    selectedTab: string | number;
    setSelectedTab: Dispatch<SetStateAction<string | number>>;
} | null>(null);
const useTabsContext = () => {
    const tabsContext = useContext(TabContext);
    if (!tabsContext) throw new Error("Tabs 컨텍스트 내부에서 사용하세요.");
    return tabsContext;
};
type TabsProps = PropsWithChildren<{
    value: string | number;
}>;
export const Tabs = ({ value, children }: TabsProps) => {
    const [selectedTab, setSelectedTab] = useState(value);
    return (
        <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
            {children}
        </TabContext.Provider>
    );
};
Tabs.useTabsContext = useTabsContext;
Tabs.Tab = Tab;
Tabs.Content = Content;
