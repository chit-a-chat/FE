import { ComponentType } from "react";

import { Navigate } from "react-router-dom";

import { useAccountStore } from "@entities/account";

export const withLogin = <P extends object>(LoginRequiredComponent: ComponentType<P>) => {
    return (props: P) => {
        const { isLoggedIn } = useAccountStore();
        if (!isLoggedIn) {
            return <Navigate to={"/"} />;
        }
        return <LoginRequiredComponent {...props} />;
    };
};
