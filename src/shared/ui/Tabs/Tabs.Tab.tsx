import { PropsWithChildren, useCallback } from "react";

import { Interpolation } from "@emotion/react";
import { Theme } from "@emotion/react";

import { Tabs } from "./Tabs";

type TabProps = PropsWithChildren<{
    /**
     * @description value와 selectedTab이 같으면 "&[data-selected]" 속성을 가짐
     */
    value: string | number;
    disabled?: boolean;
    /**
     * @description
     *  * [data-selected]는 선택되었을 경우, [data-disabled]는 disabled일 경우
     *  * example
     *  *  * {
     *      "&": {
     *          color:"black",
     *      },
     *     "&[data-selected]": {
     *          color:"red"
     *      },
     *      "&[data-disabled]": {
     *          color:white;
     *      }
     *      ".Tab[data-selected]" : {
     *      color:red
     *      }
     * }
     *  */
    css?: Interpolation<Theme>;
}>;

export const Tab = ({ value, children, disabled, ...props }: TabProps) => {
    const { selectedTab, setSelectedTab } = Tabs.useTabsContext();
    const isSelected = value === selectedTab || undefined;
    const handleSelectTab = useCallback(() => {
        if (disabled || isSelected) return;
        setSelectedTab(value);
    }, [disabled, isSelected, value, setSelectedTab]);

    return (
        <div
            className="Tab"
            onClick={handleSelectTab}
            data-selected={isSelected}
            data-disabled={disabled}
            css={{ cursor: "pointer", "&:[data-disabled]": { pointerEvents: "none" } }}
            {...props}
        >
            {children}
        </div>
    );
};
