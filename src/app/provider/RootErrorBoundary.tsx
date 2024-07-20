import { Component, ErrorInfo, ReactNode } from "react";

type ErrorBoundaryProps = {
    children?: ReactNode;
};

type State =
    | {
          hasError: false;
      }
    | {
          hasError: true;
          error: Error;
          // 컴포넌트 안바뀌고 모달로 보여지고 싶을때
          isModal?: boolean;
      };

// 함수형으로 만들려면 라이브러리 다운 필요.
export class RootErrorBoundary extends Component<ErrorBoundaryProps, State> {
    public state: State = { hasError: false };

    static getDerivedStateFromError(error: Error) {
        // Error 캐치시 상태 변경
        // const customError = handleError(error);
        return { hasError: true, error: error };
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // 에러 캐치시 실행 함수.
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError && !this.state.isModal) {
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            return (
                <div>
                    <h1>{this.state.error.name}</h1>
                    <h3>{this.state.error.message}</h3>
                </div>
            );
        }

        return this.props.children;
    }
}
