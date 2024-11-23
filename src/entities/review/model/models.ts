import { User } from "@entities/user";

export type Reviewer = Pick<User, "name" | "images"> & {
    name: string;
    averageRating: number;
    totalReviews: number;
};
export type Reviewee = Reviewer & {
    id: string;
};
export type SimpleReview = {
    name: string;
    registerDate: Date;
    content: string;
};

export type Review = {
    registerDate: Date;
    content: string;
    rating: number;
    reviewer: Reviewer;
};
