import { HttpHandler, HttpResponse, http } from "msw";

/** /examples/:exampleParams */
type ExampleParams = {
    exampleId: string;
};
/** /examples/?keyword="바보"&page=3.... */
type ExampleListRes = {
    isSuccess: number;
    pageInfo: {
        page: number;
        isNextPage: boolean;
        totalPage: number;
        data: { user: { name: string; age: number }; example: string }[];
    };
};
/** RequestBody */
type ExampleRequestBody = {
    keyword: string;
    page: number;
};

/** mock Api Server가 받을 url + 요청 */
export const apiHandlers: HttpHandler[] = [
    /** example detail
     * pathVariable 받아오는 법 (패뜨 파라미터)
     */
    http.get<ExampleParams>("/examples/:exampleId", ({ params }) => {
        const { exampleId } = params;
        return HttpResponse.json<{
            user: {
                name: string;
                age: number;
            };
            example: string;
        }>({
            user: {
                name: "이름",
                age: parseInt(exampleId),
            },
            example: "예시 api",
        });
    }),
    /** example List
     * queryString(쿼리스트링) 받아오는 법 (쿼리 파라미타)
     */
    http.get<object>("/examples", ({ request }) => {
        const url = new URL(request.url);
        const page = url.searchParams.get("page");
        const keyword = url.searchParams.get("keyword");
        const orderBy = url.searchParams.get("orderBy");
        const sortBy = url.searchParams.get("sortBy");
        if (!page || !keyword) {
            return new HttpResponse(
                `page:${page}\nkeyword:${keyword}\norderBy:${orderBy}\nsortBy:${sortBy}`,
                { status: 404 }
            );
        }

        return HttpResponse.json<ExampleListRes>({
            isSuccess: 1,
            pageInfo: {
                page: 1,
                isNextPage: true,
                totalPage: 100,
                data: [{ user: { age: 10, name: "테스트네임" }, example: "테스트" }],
            },
        });
    }),
    /** example 포스트
     * request 바디 테스트
     */
    http.post<object, ExampleRequestBody>("/examples/", async ({ request }) => {
        const body = await request.json();
        const { keyword, page } = body;
        return HttpResponse.json({
            pages: [{ name: keyword, page: page }],
        });
    }),
    /** 클라이언트 에러 */
    http.get("/serverError", () => {
        const errorResponse = new HttpResponse("Not found", {
            status: 404,
            headers: {
                "Content-Type": "text/plain",
            },
        });
        return errorResponse;
    }),
    /** 네트워크 에러 */
    http.get("/networkError", () => {
        return HttpResponse.error();
    }),
];
