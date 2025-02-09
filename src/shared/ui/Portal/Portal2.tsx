import { PropsWithChildren } from "react";

import { createPortal } from "react-dom";

export const Portal2 = ({ children }: PropsWithChildren) => {
    return createPortal(children, document.body);
};
