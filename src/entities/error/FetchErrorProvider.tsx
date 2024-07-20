import { Component, ErrorInfo, ReactNode } from "react";

import { handleError } from "@shared/error";
import { CustomError } from "@shared/error/model/CustomError";
import { ClassProperties } from "@shared/utils";

type ErrorBoundaryProps = {
    children?: ReactNode;
    Fallback?: ReactNode;
    onError?: (...args: unknown[]) => unknown;
};
type State =
    | {
          hasError: false;
          isRefetched: boolean;
      }
    | {
          hasError: true;
          error: ClassProperties<CustomError>;
          // 컴포넌트 안바뀌고 모달로 보여지고 싶을때
          isModal?: boolean;
          isRefetched: boolean;
      };

// 함수형으로 만들려면 라이브러리 다운 필요.
export class ComponentErrorBoundary extends Component<ErrorBoundaryProps, State> {
    public state: State = { hasError: false, isRefetched: false };

    static getDerivedStateFromError(error: Error): State {
        // Error 캐치시 상태 변경
        const customError = handleError(error);

        return { hasError: true, error: customError, isRefetched: true };
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        if (!this.state.isRefetched && this.props.onError) {
            this.props.onError();
            console.error("재요청");
        }
        // 에러 캐치시 실행 함수.
        console.error(error, errorInfo);
    }

    render() {
        const { children, Fallback } = this.props;
        if (this.state.hasError && !this.state.isModal) {
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            if (Fallback) {
                return Fallback;
            }
            return (
                <div>
                    <h1>{this.state.error.name}</h1>
                    <h3>{this.state.error.message}</h3>
                </div>
            );
        }

        return children;
    }
}
