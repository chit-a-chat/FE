import { PropsWithChildren, forwardRef } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { useSelectContext } from "./Select.useSelectContext";

const MenuItemContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 8px;
        &:hover {
            background-color: ${theme.palette.primary[0]};
            cursor: pointer;
        }
    `
);
type MenuItemProps<T = string | number | undefined> = { value: T };

export const MenuItem = forwardRef<HTMLDivElement, PropsWithChildren<MenuItemProps>>(
    ({ children, value }, ref) => {
        const { handleMenuClick } = useSelectContext();

        return (
            <MenuItemContainer
                ref={ref}
                onClick={() => {
                    handleMenuClick(value);
                }}
            >
                {children}
            </MenuItemContainer>
        );
    }
);
