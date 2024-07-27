import { setupWorker } from "msw/browser";

import { apiHandlers } from "./apiHandlers";

/** mockApiWorker
 * 브라우저 워커를 이용하여 api가 실제 돌아가는 것처럼 해줌(현재 주소가 서버처럼 작동함.)
 * ※라우터 경로와 겹치지 않도록 주의(어떤 일이 일어날 지 모름)☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆
 */
export const mockApiWorker = setupWorker(...apiHandlers);
