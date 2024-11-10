import { Review } from "@entities/review";

import { UserProfileIcons } from "./consts";

export type User = {
    name: string;
    age: number;
    likes: number;
    distance: number;
    bio: string;
    aboutMe: Record<keyof typeof UserProfileIcons | string, string>;
    lookingFor: string[];
    moreAboutMe: Record<keyof typeof UserProfileIcons | string, string>;
    languages: string[];
    reviews: Review[];
    interests: string[];
    images: string[];
};
