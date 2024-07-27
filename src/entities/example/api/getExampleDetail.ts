import axios from "axios";

import { QueryKeys, queryKeys } from "@entities/queryKeys";

import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

import { Example } from "../model/types";

/**QueryFunctionContext로 QueryFunction Props 값 가져올 수 있음 */
type Props = QueryFunctionContext<QueryKeys["example"]["detail"]["queryKey"]>;
type Res = {
    data: Example;
};

const getExampleDetail = async ({ signal, queryKey }: Props) => {
    const [, , exampleId] = queryKey;
    const res = await axios.get<Res>(`/examples/${exampleId}`, {
        signal,
    });
    return res.data;
};

export const useExampleDetail = (exampleDetailId: number) => {
    return useQuery({
        queryKey: queryKeys.example.detail(exampleDetailId).queryKey,
        queryFn: getExampleDetail,
    });
};
