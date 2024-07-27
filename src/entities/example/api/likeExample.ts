import axios from "axios";

import { QueryKeys, queryKeys } from "@entities/queryKeys";

import { QueryFunctionContext, useMutation } from "@tanstack/react-query";

import { Example } from "../model/types";

/**QueryFunctionContext로 QueryFunction Props 값 가져올 수 있음 */
type Props = QueryFunctionContext<QueryKeys["example"]["detail"]["queryKey"]>;
type Res = {
    data: Example;
};

export const likeExample = async ({ signal, queryKey }: Props) => {
    const [, , exampleId] = queryKey;
    const res = await axios.post<Res>(`/examples/${exampleId}/likes`, {
        signal,
    });
    return res.data;
};

export const useLikeExample = (exampleDetailId: number) => {
    return useMutation({
        mutationKey: queryKeys.example.detail(exampleDetailId)._ctx.likes.queryKey,
        mutationFn: likeExample,
    });
};
