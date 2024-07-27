import { createQueryKeys } from "@lukemorales/query-key-factory";

export const exampleUserQueryKey = createQueryKeys("exampleUser", {
    all: null,
    detail: (userId: number) => ({
        queryKey: [userId],
    }),
    error: (type: "axios" | "common") => ({
        queryKey: [type],
    }),
});
