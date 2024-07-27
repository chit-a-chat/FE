import { ExampleUser } from "@entities/exampleUser";

export type Example = {
    user: ExampleUser;
    example: string;
};
export type ExampleFilters = {
    keyword: string;
    sortBy: "keyword" | "createdAt" | "editedAt"[];
    orderBy: "asc" | "desc";
};
