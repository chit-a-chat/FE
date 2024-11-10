import {
    MutableRefObject,
    PropsWithChildren,
    createContext,
    useCallback,
    useContext,
    useRef,
    useState,
} from "react";

import { Content } from "./DropdownMenu.Content";
import { DropdownItem } from "./DropdownMenu.Item";
import { Trigger } from "./DropdownMenu.Trigger";

const DropdownMenuContext = createContext<null | {
    isOpen: boolean;
    toggleOpen: () => void;
    anchorElement: MutableRefObject<HTMLDivElement | null>;
}>(null);
type DropdownMenuProps = PropsWithChildren<{ initialOpen?: boolean }>;

export const DropdownMenu = ({ children, initialOpen }: DropdownMenuProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialOpen || false);
    const anchorElement = useRef<HTMLDivElement | null>(null);
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <DropdownMenuContext.Provider value={{ isOpen, toggleOpen, anchorElement }}>
            {children}
        </DropdownMenuContext.Provider>
    );
};

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = Content;
DropdownMenu.Item = DropdownItem;
DropdownMenu.useContext = () => {
    const dropdownContext = useContext(DropdownMenuContext);
    if (!dropdownContext) {
        throw new Error("DropdownMenu 컴포넌트 내부에서 사용하세요.");
    }
    return dropdownContext;
};
