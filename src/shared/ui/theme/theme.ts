import { lightPalette } from "./palette";

const light = {
    // app background color
    bgColor: "linear-gradient(180deg, rgba(231, 225, 255, 0.4) 0%, rgba(221, 230, 253, 0.4) 83%)",
    button: {
        // background-color
        bgColor: {
            default: {
                primary: lightPalette.primary[5],
                secondary: lightPalette.white[0],
                error: lightPalette.red[4],
                disable: lightPalette.grey[1],
            },
            hover: {
                primary: lightPalette.primary[6],
                secondary: lightPalette.primary[0],
                error: lightPalette.red[5],
            },
        },
        // border
        border: {
            default: {
                secondary: `1.5px solid ${lightPalette.primary[3]}`,
            },
            focus: {
                secondary: `1.5px solid ${lightPalette.primary[7]}`,
            },
        },
        // text-color
        color: {
            default: {
                primary: lightPalette.common.white,
                secondary: lightPalette.primary[5],
                error: lightPalette.white[0],
                disable: lightPalette.grey[3],
            },
        },
    },
};

export const theme = { light };
