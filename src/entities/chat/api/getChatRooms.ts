import axios from "axios";
import dayjs from "dayjs";

import { QueryKeys, queryKeys } from "@entities/queryKeys";

import { QueryFunctionContext, useSuspenseQuery } from "@tanstack/react-query";

import { ChatFilter, ChatRoom } from "../model/model";

type Props = QueryFunctionContext<QueryKeys["chat"]["roomList"]["queryKey"]>;
type Return = Record<string, ChatRoom>;
type Res = {
    data: Return;
};

const roomsDayDiff = (room1: ChatRoom, room2: ChatRoom) => {
    return dayjs(room2.updatedAt).diff(dayjs(room1.updatedAt));
};

const getChatRooms = async (props: Props): Promise<Return> => {
    const { signal } = props;
    const res = (await axios.get<Res>("/mock/chatrooms", { signal })).data.data;
    return res;
};

export const useGetChatRooms = (filter: ChatFilter) => {
    return useSuspenseQuery({
        queryKey: queryKeys.chat.roomList().queryKey,
        queryFn: getChatRooms,
        select: (chatRooms) => {
            const chatRoomArray = Object.values(chatRooms);
            switch (filter) {
                case "DATE_DESC":
                    return chatRoomArray.sort((room1, room2) => roomsDayDiff(room1, room2));
                case "DATE_ASC":
                    return chatRoomArray.sort((room1, room2) => roomsDayDiff(room2, room1));
                default:
                    return chatRoomArray.sort((room1, room2) => {
                        if (room1.isFavorite !== room2.isFavorite) {
                            return room1.isFavorite ? 1 : -1;
                        }
                        return roomsDayDiff(room1, room2); // updatedAt 기준 정렬
                    });
            }
        },
    });
};
