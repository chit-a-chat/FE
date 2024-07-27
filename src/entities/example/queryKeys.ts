import { createQueryKeys } from "@lukemorales/query-key-factory";

import { ExampleFilters } from "./model/types";

/**
 * 'example'은 QueryKey에 자동으로 들어가게 됨
 * all, detail 또한 QueryKey에 자동으로 들어가게 됨
 * queryKey: [exampleId]는 함께 들어가는 쿼리키들
 * detail의 쿼리키는 최종적으로 ['example','detail',exampleId]가 된다.
 */
export const exampleQueryKeys = createQueryKeys("example", {
    all: null,
    detail: (exampleId: number) => ({
        queryKey: [exampleId],
        contextQueries: {
            likes: {
                queryKey: null,
            },
            create: {
                queryKey: null,
            },
        },
    }),
    list: (filters: ExampleFilters) => ({
        queryKey: [{ filters }],
    }),
});
