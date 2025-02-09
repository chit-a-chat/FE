import { en } from "../en/en.translation";
import { common } from "./common";
import { explore } from "./explore";
import { gnb } from "./gnb";
import { home } from "./home";
import { matches } from "./matches";
import { profile } from "./profile";
import { reviews } from "./reviews";
import { sign_in } from "./sign_in";

/** Object Key값들만 가져와 타입 만드는 타입 유틸. */
type TEqualKeyObject<T> = {
    [K in keyof T]: T[K] extends object ? TEqualKeyObject<T[K]> : unknown;
};
/** TEqualKeyObject를 이용하여 en 번역의 Key값들과 일치하도록 만들게 강제하기. */
export const ko: TEqualKeyObject<typeof en> = {
    common,
    home,
    sign_in,
    explore,
    gnb,
    matches,
    reviews,
    profile,
} as const;
