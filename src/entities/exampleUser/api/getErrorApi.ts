import axios from "axios";

import { QueryKeys, queryKeys } from "@entities/queryKeys";

import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

type Props = QueryFunctionContext<QueryKeys["exampleUser"]["error"]["queryKey"]>;
const getError = async (props: Props): Promise<void> => {
    const { queryKey } = props;
    const [, , errorType] = queryKey;

    switch (errorType) {
        case "axios":
            axios.get("/errorrrrr");
            break;
        case "common":
            throw new Error("에러");
    }
};

export const useGetError = (errorType: "axios" | "common") => {
    return useQuery({
        queryKey: queryKeys.exampleUser.error(errorType).queryKey,
        queryFn: getError,
    });
};
