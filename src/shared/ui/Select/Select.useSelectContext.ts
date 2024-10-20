import { createContext, useContext } from "react";

type SelectContext = {
    value: number | string | undefined;
    handleMenuClick: (value: number | string | undefined) => void;
};
export const SelectContext = createContext<SelectContext | null>(null);
export const useSelectContext = () => {
    const context = useContext(SelectContext);
    if (!context) throw new Error("useSelectContext는 SelectProvider 내부에서 사용하세요.");
    return context;
};
