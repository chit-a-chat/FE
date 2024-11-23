import { PropsWithChildren } from "react";

import { Tabs } from "./Tabs";

type ContentProps = PropsWithChildren<{
    value: string | number;
}>;

export const Content = ({ value, children }: ContentProps) => {
    const { selectedTab } = Tabs.useTabsContext();
    if (selectedTab === value) return children;
};
