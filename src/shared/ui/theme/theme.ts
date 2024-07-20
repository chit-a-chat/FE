import { palette } from "./palette";

// FIXME: themeId 스토어 또는 로컬스토리지 적용
const themeId = "light";

export const theme = {
    light: {
        // FIXME: 디자인시스템 구조 결정하여 그에 맞게 적용 필요 2024.07.18. 김하늬
        button: {
            primary: {
                bgColor: palette[themeId].primary[5], // background-color
                borderColor: "none", // border-color
                color: palette.common.white, // text-color
                bgColorHover: palette[themeId].primary[6],
            },
            secondary: {
                bgColor: palette[themeId].white[0],
                borderColor: palette[themeId].primary[3],
                color: palette[themeId].primary[5],
                bgColorHover: palette[themeId].primary[0],
            },
            error: {
                bgColor: palette[themeId].red[5],
                borderColor: "none",
                color: palette[themeId].white[0],
                bgColorHover: palette[themeId].red[6],
            },
            disable: {
                bgColor: palette[themeId].grey[1],
                borderColor: "none",
                color: palette[themeId].grey[3],
                // FIXME: disable variant에 불필요한 hover, focused 등 옵션 제외(타입 정의 필요) 2024.07.20. 김하늬
                bgColorHover: palette[themeId].grey[1],
            },
        },
    },
};
