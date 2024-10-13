import { CSSProperties, PropsWithChildren, useLayoutEffect, useRef, useState } from "react";

import { flushSync } from "react-dom";

import { Position } from "../types";
import { getPositionCss } from "../utils/getPositionCss";

type AutoPositionProps = PropsWithChildren<{
    container: HTMLElement;
    anchorEl: HTMLElement;
    position: Position;
    isAutoPosition: boolean;
}>;
/**
 * 컴포넌트 위치 계산해주고,
 * isAutoPosition===true일 경우 Container 안으로 위치조정 하는 컴포넌트
 */
export const AutoPosition = ({
    children,
    anchorEl,
    container,
    position,
    isAutoPosition,
}: AutoPositionProps) => {
    const throttlingKey = useRef<number | null>();
    const resizeThrottlingKey = useRef<number | null>();
    const displayElRef = useRef<HTMLDivElement>(null);
    /** 컨테이너에 scroll 있을때, 스크롤 해도 위치를 고정시켜주는 역할. */
    const { current: initialScroll } = useRef<{ x: number; y: number }>({
        x: container.scrollLeft ?? 0,
        y: container.scrollTop ?? 0,
    });
    const [style, setStyle] = useState<CSSProperties>();

    useLayoutEffect(() => {
        const displayEl = displayElRef.current;
        if (!displayEl) throw new Error("ref에 연결된 element가 없습니다.");
        /** ancchorEl, position에 따라서 알맞은 위치로 출력하도로 CSS 생성하는 함수.  */
        const newStyle = getPositionCss({
            position,
            anchorEl,
            container,
            displayEl,
            isAutoPosition,
        });
        setStyle(newStyle);
        const handlePostion = () => {
            // 쓰로틀링
            if (!throttlingKey.current) {
                throttlingKey.current = setTimeout(() => {
                    /** 연산 우선순위 높여서 렉을 줄여준다. */
                    requestAnimationFrame(() => {
                        {
                            const { x, y } = initialScroll;
                            const xDiff = container.scrollLeft ?? 0;
                            const yDiff = container.scrollTop ?? 0;
                            // 순차 적용
                            flushSync(() => {
                                setStyle((prev) => ({
                                    ...prev,
                                    transform: `translate(${-xDiff + x}px, ${-yDiff + y}px)`,
                                }));
                            });
                        }
                    });
                    throttlingKey.current = null;
                }, 10);
            }
        };
        const handleResize = () => {
            if (!resizeThrottlingKey.current) {
                resizeThrottlingKey.current = setTimeout(() => {
                    requestAnimationFrame(() => {
                        setStyle(
                            getPositionCss({
                                position,
                                anchorEl,
                                container,
                                displayEl,
                                isAutoPosition,
                            })
                        );
                        resizeThrottlingKey.current = null;
                    });
                }, 10);
            }
        };
        if (container) {
            container.addEventListener("scroll", handlePostion);
            window.addEventListener("resize", handleResize);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", handlePostion);
                window.removeEventListener("resize", handleResize);
            }
        };
    }, [anchorEl, initialScroll, position, container, displayElRef, isAutoPosition]);

    return (
        <div
            style={{ ...style }}
            ref={displayElRef}
            onClick={(e) => {
                /**
                 * 원치않는 컴포넌트로 이벤트 전파 방지.
                 * DOM트리 기준 이벤트 전파가 아닌, 리액트 트리기준 이벤트 전파이기 때문에,
                 * body에 출력되어있더라도, Portal을 호출했던 컴포넌트로 이벤트 전파가 된다.
                 * 따라서 해당 케이스로 사용하는 경우가 거의 없기때문에, 막아주는게 좋다.
                 */
                e.stopPropagation();
            }}
        >
            {children}
        </div>
    );
};
