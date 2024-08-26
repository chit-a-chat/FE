import { CSSProperties } from "react";

import { Position, PositionValue } from "../types";

type GetChildrenPositionProps = {
    position: Position;
    anchorEl: HTMLElement;
    container: HTMLElement;
    displayEl: HTMLElement;
    isAutoPosition: boolean;
};
/**
 * @param lengthFromAnchor Anchor Element로부터의 거리 cssString
 * @param anchorWidthOrHeight cssString이 %일 경우, anchorWidthOrHeight를 기준으로 계산.
 * CssString에서 Pixel값 number로 뽑아오는 함수. */
const getPixelFromCssString = (lengthFromAnchor: string, anchorWidthOrHeight: number) => {
    const endIndex = lengthFromAnchor.match(/[+\-*/x%]/)?.index ?? lengthFromAnchor.length - 1;
    switch (lengthFromAnchor[endIndex]) {
        case "%":
            return (parseInt(lengthFromAnchor) * anchorWidthOrHeight) / 100;
        case "x":
            return parseInt(lengthFromAnchor);
        case ")":
            return parseInt(lengthFromAnchor);
        default:
            return parseInt(lengthFromAnchor);
    }
};
/**
 * @param {number} anchorPosition  절대 위치로 px 단위
 * @param {number} lengthFromAnchor anchor로 부터 거리 px 단위
 * */
const getPosition = (
    lengthFromAnchor: PositionValue,
    anchorPosition: number,
    anchorWidthOrHeight: number
) => {
    if (typeof lengthFromAnchor === "number") return anchorPosition + lengthFromAnchor;
    parseCalc(lengthFromAnchor, anchorWidthOrHeight);
    return (
        anchorPosition +
        (lengthFromAnchor.startsWith("calc")
            ? parseCalc(lengthFromAnchor, anchorWidthOrHeight)
            : getPixelFromCssString(lengthFromAnchor, anchorWidthOrHeight))
    );
};

/** TODO : pop으로 연산하는 알고리즘 적용하기. 2024-08-25 윤동근*/
const parseCalc = (lengthFromAnchor: string, anchorWidthOrHeight: number) => {
    const parsedLengthFromAnchor = lengthFromAnchor
        .replace(/\s+/g, "")
        .replace(/.*\(([^)]+)\).*/, "$1");
    const ValueWithDelimiterIndex = parsedLengthFromAnchor.matchAll(/[+\-*/]/g);
    let calculatedValue = getPixelFromCssString(parsedLengthFromAnchor, anchorWidthOrHeight);
    for (const aValueWithDelimiter of ValueWithDelimiterIndex) {
        const delimiterIndex = aValueWithDelimiter.index;
        const delimiter = parsedLengthFromAnchor[delimiterIndex];
        switch (delimiter) {
            case "+":
                calculatedValue += getPixelFromCssString(
                    parsedLengthFromAnchor.slice(delimiterIndex + 1, parsedLengthFromAnchor.length),
                    anchorWidthOrHeight
                );

                break;
            case "-":
                calculatedValue -= getPixelFromCssString(
                    parsedLengthFromAnchor.slice(delimiterIndex + 1, parsedLengthFromAnchor.length),
                    anchorWidthOrHeight
                );
                break;
            case "*":
                calculatedValue *= getPixelFromCssString(
                    parsedLengthFromAnchor.slice(delimiterIndex + 1, parsedLengthFromAnchor.length),
                    anchorWidthOrHeight
                );
                break;
            default:
                calculatedValue /= getPixelFromCssString(
                    parsedLengthFromAnchor.slice(delimiterIndex + 1, parsedLengthFromAnchor.length),
                    anchorWidthOrHeight
                );
                break;
        }
    }
    return calculatedValue;
};

export const getPositionCss = ({
    position,
    anchorEl,
    container,
    displayEl,
    isAutoPosition,
}: GetChildrenPositionProps) => {
    // 사용자 설정 위치
    const {
        top: topFromAnchor,
        right: rightFromAnchor,
        left: leftFromAnchor,
        bottom: bottomFromAnchor,
    } = position;
    // Anchor Element 위치
    const { left, top, bottom, right, width, height } = anchorEl.getBoundingClientRect();
    // Container 위치
    const {
        left: cLeft,
        top: cTop,
        right: cRight,
        bottom: cBottom,
        height: cHeight,
        width: cWidth,
    } = container.getBoundingClientRect();
    // Displayed Element 너비, 높이
    const { width: dWidth, height: dHeight } = displayEl.getBoundingClientRect();
    let {
        calculatedTop,
        calculatedLeft,
        calculatedBottom,
        calculatedRight,
    }: Record<string, number | undefined> = {};
    calculatedTop =
        typeof topFromAnchor !== "undefined"
            ? getPosition(topFromAnchor, top, height)
            : topFromAnchor;
    calculatedLeft =
        typeof leftFromAnchor !== "undefined"
            ? getPosition(leftFromAnchor, left, width)
            : undefined;
    calculatedBottom =
        typeof bottomFromAnchor !== "undefined"
            ? bottom * 2 - getPosition(bottomFromAnchor, bottom, height) - dHeight
            : undefined;
    calculatedRight =
        typeof rightFromAnchor !== "undefined"
            ? right * 2 - getPosition(rightFromAnchor, right, width) - dWidth
            : undefined;
    /**
     *  초기 렌더링시 컨테이너 밖으로 못나가도록 계산.
     */
    if (isAutoPosition) {
        if (calculatedLeft && calculatedLeft + dWidth < cRight) {
            calculatedLeft = cRight - dWidth;
        }
        if (calculatedTop && calculatedTop + dHeight > cBottom) {
            calculatedTop = cBottom - dHeight;
        }
        if (calculatedRight && calculatedRight - dWidth < cLeft) {
            calculatedRight = cWidth - dWidth;
        }
        if (calculatedBottom && calculatedBottom - dHeight < cTop) {
            calculatedBottom = cHeight + dHeight;
        }
    }

    const cssProps: CSSProperties = {
        top: calculatedTop ?? calculatedBottom,
        left: calculatedLeft ?? calculatedRight,
        position: "relative",
    };
    return cssProps;
};
