/** 국기 CSS */
import "/node_modules/flag-icons/css/flag-icons.min.css";

/**
 * 국가의 영어 이름과 대응하는 ISO 3166-1-alpha-2 code 맵핑한 자료.
 * ex. Korean -> ko, English -> en
 * {@link https://www.iso.org/obp/ui/#search/code/}
 */

const CountryToAlpha2Map = {
    American: "us",
    English: "gb",
    Japanese: "jp",
    Korean: "kr",
} as const;

export type TCountryName = keyof typeof CountryToAlpha2Map;

type TFlagProps = {
    country: TCountryName;
    width?: string;
    height?: string;
    isRound?: boolean;
    isSquare?: boolean;
};

/**
 * @param isRound - 원형
 * @example
 * <span class="fi fi-gr"></span> // 일반 국기
 * <span class="fi fi-gr fis"></span> // 정사각형 국기
 */
export const CountryFlag = ({ isRound, country, width, height, isSquare = true }: TFlagProps) => {
    return (
        <div
            className={`fi fi-${CountryToAlpha2Map[country]} ${isSquare ? "fis" : ""}`}
            style={{ width, height, borderRadius: isRound ? "100%" : undefined }}
        />
    );
};
