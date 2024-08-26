type Unit = "px" | "%";
type Operator = "+" | "-" | "*" | "/";

/** TODO: CSS 타입 지원하는 범위 늘려주기. 2024.08.25 윤동근*/
export type PositionValue =
    | number
    | `${number}`
    | `${number}${Unit}`
    | `calc(${number}${Unit} ${Operator} ${number}${Unit})`
    | `calc(${number}${Unit} ${Operator} ${number}${Unit} ${Operator} ${number}${Unit})`;

export type Position = {
    top?: PositionValue;
    right?: PositionValue;
    bottom?: PositionValue;
    left?: PositionValue;
};
