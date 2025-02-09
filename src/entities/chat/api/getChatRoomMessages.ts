import axios from "axios";

import { QueryKeys, queryKeys } from "@entities/queryKeys";

import { QueryFunctionContext, useSuspenseQuery } from "@tanstack/react-query";

import { Message } from "../model/model";

type Props = QueryFunctionContext<QueryKeys["chat"]["initialChatList"]["queryKey"]>;
type Return = Omit<Message, "roomId">[];
type Res = {
    data: Return;
};
const getInitialMessage = async (props: Props): Promise<Return> => {
    const { queryKey, signal } = props;
    const [, , , chatRoomId] = queryKey;
    const res = (await axios.get<Res>(`/mock/chat/${chatRoomId}`, { signal })).data.data;
    return res;
};
export const useGetChatRoomMessages = (roomId: string) => {
    return useSuspenseQuery({
        queryKey: queryKeys.chat.initialChatList(roomId).queryKey,
        queryFn: getInitialMessage,
    });
};
