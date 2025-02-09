export type MatchRecommend = {
    id: string;
    name: string;
    age: number;
    distance: number;
    interests: string[];
    profileImages: string[];
    instagram?: string;
};

export type MatchRequest = {
    id: string;
    name: string;
    profileImage: string;
    requestTime: Date;
};

export type Like = {
    id: string;
    targetId: string;
    name: string;
    profileImage: string;
    likeTime: Date;
};
