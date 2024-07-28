import { Component, ErrorInfo, ReactNode } from "react";

import { CustomError } from "@shared/error/model/CustomError";
import { ClassProperties } from "@shared/utils";

type ErrorBoundaryProps = {
    children?: ReactNode;
    fallback?: ReactNode;
    onReset?: (args: unknown) => unknown;
};
type State =
    | {
          hasError: false;
          isRefetched: boolean;
      }
    | {
          hasError: true;
          error: ClassProperties<CustomError>;
      };

// 함수형으로 만들려면 라이브러리 다운 필요.
export class FetchErrorBoundary extends Component<ErrorBoundaryProps, State> {
    public state: State = { hasError: false, isRefetched: false };

    static getDerivedStateFromError(error: Error): State {
        // Error 캐치시 상태 변경
        // const customError = handleError(error);
        return { hasError: true, error: error };
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // 에러 캐치시 실행 함수.
        console.info(error, errorInfo);
    }

    render() {
        const { children, fallback, onReset } = this.props;
        const { hasError } = this.state;
        if (hasError) {
            const { error } = this.state;
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            if (fallback) {
                return fallback;
            }
            return (
                <div>
                    <h1>{error.name}</h1>
                    <h3>{error.message}</h3>
                    <button onClick={onReset}>재시도</button>
                </div>
            );
        }

        return children;
    }
}
