import { common } from "./common";
import { explore } from "./explore";
import { gnb } from "./gnb";
import { home } from "./home";
import { matches } from "./matches";
import { profile } from "./profile";
import { reviews } from "./reviews";
import { sign_in } from "./sign_in";

export const en = {
    common,
    home,
    sign_in,
    explore,
    gnb,
    matches,
    reviews,
    profile,
} as const;
