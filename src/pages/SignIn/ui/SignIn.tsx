import { useTheme } from "@emotion/react";

import { SignInBanner } from "./components/SignInBanner";
import { SignUp } from "./components/SignUp";

export const SignIn = () => {
    const theme = useTheme();
    return (
        <>
            <section
                css={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    margin: "30px",
                    alignItems: "center",
                }}
            >
                <SignInBanner />
                <SignUp />
            </section>
            <section
                css={{
                    flex: 1,
                    display: "flex",
                    borderRadius: "20px",
                    background: `linear-gradient(180deg, ${theme.palette.primary[1]}66 0%, ${theme.palette.blue[1]}66 83%)`,
                    margin: "30px 30px 30px 10px",
                }}
            ></section>
        </>
    );
};
