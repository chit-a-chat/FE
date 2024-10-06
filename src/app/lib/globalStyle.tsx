import { useEffect, useState } from "react";

import i18n from "@features/i18n";

import { Global, css, useTheme } from "@emotion/react";
import { Theme } from "@emotion/react";

const baseCss = (language: typeof i18n.language, theme: Theme) => css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    html {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-family: ${language === "Korean"
            ? "'IBM Plex Sans KR', sans-serif"
            : "'Roboto', sans-serif"};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        vertical-align: baseline;
    }
    body,
    div,
    span,
    button,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a p,
    a span {
        color: ${theme.typo.linkColor};
    }
`;

export function GlobalStyle() {
    const theme = useTheme();
    const [baseStyle, setBaseStyle] = useState(baseCss(i18n.language, theme));
    useEffect(() => {
        const handleFontFamilyChange = (language: string) => {
            if (language === "English") {
                setBaseStyle(baseCss("English", theme));
            } else {
                setBaseStyle(baseCss("Korean", theme));
            }
        };
        i18n.on("languageChanged", handleFontFamilyChange);

        return () => {
            i18n.off("languageChanged", handleFontFamilyChange);
        };
    }, []);

    return <Global styles={baseStyle} />;
}
