import { inferQueryKeyStore, mergeQueryKeys } from "@lukemorales/query-key-factory";

import { exampleQueryKeys } from "./example";
import { exampleUserQueryKey } from "./exampleUser";

/** 도메인별 쿼리키가 합쳐진 변수
 * 현재 관리되고 예시 키 {@linkcode exampleUserQueryKey}와 {@linkcode exampleQueryKeys}
 *
 * 계속 추가해서 사용하면 됩니다.
 *
 * @example
 * useQuery({
 * queryKey: queryKeys.example.detail(exampleDetailId).queryKey,
 * queryFn: () => {}
 * })
 */
export const queryKeys = mergeQueryKeys(exampleQueryKeys, exampleUserQueryKey);

/** 도메인별 쿼리키에 따른 queryFn의 Prop 타입
 *
 * @example
 * type Props = QueryFunctionContext<QueryKeys["example"]["detail"]["queryKey"]>;
 * const myQueryFn = async ({signal,queryKey}:Props) => {
 * const [, , exampleId] = queryKey;
 * return await axios.get('/example',{id:exampleId,signal});
 * }
 */
export type QueryKeys = inferQueryKeyStore<typeof queryKeys>;
