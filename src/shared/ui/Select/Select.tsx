import {
    ChangeEvent,
    Children,
    PropsWithChildren,
    ReactElement,
    ReactNode,
    cloneElement,
    isValidElement,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { Backdrop } from "../Backdrop/Backdrop";
import { Portal } from "../Portal/Portal";
import { Contents } from "./Select.Contents";
import { MenuItem } from "./Select.MenuItem";
import { MenuList } from "./Select.MenuList";
import { SelectContext } from "./Select.useSelectContext";

type CustomChangeEvent<T extends string | number | undefined> = Omit<
    ChangeEvent<HTMLInputElement>,
    "target" | "currentTarget"
> & {
    target: { value: T };
    currentTarget: { value: T };
};
type CustomChangeEventHandler<T extends string | number | undefined> = (
    event: CustomChangeEvent<T>
) => void;

export const Select = <T extends string | number | undefined>({
    children,
    value,
    onChange,
}: PropsWithChildren<{ value: T; onChange: CustomChangeEventHandler<T> }>) => {
    const [selectValue, setSelectValue] = useState<string | number | undefined>(value);
    const contentsRef = useRef<HTMLDivElement>(null);
    const [menuListContainer, setMenuListContainer] = useState<HTMLDivElement>();
    const [isMenuList, setIsMenuList] = useState<boolean>(false);
    const handleToggleDropDown = () => {
        setIsMenuList((prev) => !prev);
    };
    /** 하위 컴포넌트 구분 및 이벤트 추가 */
    const { optionList, contents } = useMemo(
        () =>
            Children.toArray(children).reduce<{
                optionList: ReactNode;
                contents: ReactNode;
            }>(
                (acc, child) => {
                    if (isValidElement(child)) {
                        if (child.type === MenuList) {
                            acc.optionList = child;
                        }
                        if (child.type === Contents) {
                            acc.contents = cloneElement(child as ReactElement, {
                                ref: contentsRef,
                                onClick: handleToggleDropDown,
                            });
                        }
                    }
                    return acc;
                },
                { optionList: null, contents: null }
            ),
        [children]
    );
    /** menu 클릭시 발생 이벤트 */
    const handleMenuClick = (value: string | number | undefined) => {
        if (value === selectValue) {
            setIsMenuList(false);
            return;
        }
        const event: CustomChangeEvent<T> = {
            target: { value },
            currentTarget: { value },
        } as CustomChangeEvent<T>;
        setSelectValue(value);
        setIsMenuList(false);
        onChange(event);
    };
    /** ref 연결 확인 후, Container 설정 */
    useLayoutEffect(() => {
        if (contentsRef.current) {
            setMenuListContainer(contentsRef.current);
        }
    }, [contentsRef]);
    return (
        <SelectContext.Provider
            value={{
                value: selectValue,
                handleMenuClick,
            }}
        >
            {contents}
            {isMenuList && menuListContainer && (
                <Portal
                    zIndex={1}
                    position={{ right: "0", top: "calc(100% + 10px)" }}
                    anchorEl={menuListContainer}
                >
                    <Backdrop
                        onClick={() => {
                            setIsMenuList(false);
                        }}
                    />
                    {optionList}
                </Portal>
            )}
        </SelectContext.Provider>
    );
};
Select.MenuList = MenuList;
Select.MenuItem = MenuItem;
Select.Contents = Contents;
