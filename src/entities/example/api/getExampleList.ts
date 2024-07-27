import axios from "axios";

import { QueryKeys, queryKeys } from "@entities/queryKeys";

import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";

import { Example } from "../model/types";

/**QueryFunctionContext로 QueryFunction Props 값 가져올 수 있음 */
type Props = QueryFunctionContext<QueryKeys["example"]["list"]["queryKey"]>;
type Res = {
    isSuccess: number;
    pageInfo: {
        page: number;
        isNextPage: boolean;
        totalPage: number;
        data: Example[];
    };
};

const getExampleList = async ({ signal, pageParam, queryKey }: Props) => {
    const [, , { filters }] = queryKey;
    const res = await axios.get<Res>(`/examples`, {
        params: { ...filters, page: pageParam },
        signal,
    });
    return res.data;
};

export const useExampleList = () => {
    return useInfiniteQuery({
        queryKey: queryKeys.example.list({ keyword: "2", orderBy: "asc", sortBy: "keyword" })
            .queryKey,
        queryFn: getExampleList,
        getNextPageParam: (lastData) => {
            const currentPage = lastData.pageInfo.page;
            return lastData.pageInfo.isNextPage ? currentPage + 1 : null;
        },
        getPreviousPageParam: (lastData) => {
            const currentPage = lastData.pageInfo.page;
            return currentPage > 1 ? currentPage - 1 : null;
        },
        initialPageParam: 1,
    });
};
