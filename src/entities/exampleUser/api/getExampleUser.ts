import axios from "axios";

import { QueryKeys, queryKeys } from "@entities/queryKeys";

import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

import { ExampleUser } from "../model/types";
import { splitName } from "../util/splitName";

type Props = QueryFunctionContext<QueryKeys["exampleUser"]["detail"]["queryKey"]>;
type Res = {
    data: ExampleUser;
};
type Return = Omit<ExampleUser, "name"> & { firstName: string | null; lastName: string | null };

const getExampleUser = async (props: Props): Promise<Return> => {
    const { queryKey, signal } = props;
    const [, , userId] = queryKey;
    const res = await axios.get<Res>(`/user/${userId}`, { signal });
    const user = res.data.data;
    const splitedName = splitName(user.name);

    const convertedUser: Return = {
        ...splitedName,
        age: user.age,
    };
    return convertedUser;
};

export const useGetExampleUser = (userId: number) => {
    return useQuery({
        queryKey: queryKeys.exampleUser.detail(userId).queryKey,
        queryFn: getExampleUser,
    });
};
