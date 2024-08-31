import { ReactNode, useEffect, useRef } from "react";

import { AutoPosition } from "../component/AutoPosition";
import { Position } from "../types";
import { getContainer as getLayeredContainer } from "../utils/getContainer";

type UsePortalProps = {
    zIndex?: number;
    position: Position;
    anchorEl: HTMLElement;
    children: ReactNode;
    container: HTMLElement;
    isAutoPosition: boolean;
};
/**
 * @desciption
 * zIndex === 0이면 layeredContainer는 documnet.body가 된다.
 * zIndex !== 0이면 layeredContainer는 document.body에 추가된다.
 * <div id="layer-${zIndex}"></div>이 된다.
 */
export const usePortal = ({
    zIndex,
    position,
    anchorEl,
    children,
    container,
    isAutoPosition,
}: UsePortalProps) => {
    /** z-index에 따른 계층화된 컨테이너 생성 또는 찾아오기. */
    const { current: layeredContainer } = useRef<HTMLElement>(
        getLayeredContainer(container, zIndex)
    );

    const { current: layeredChildren } = useRef<ReactNode>(
        /**
         * isAutopostion === true이면 출력 컴포넌트를
         * Container 내부로 강제로 컴포넌트 이동.
         */
        <AutoPosition
            position={position}
            anchorEl={anchorEl}
            container={container}
            isAutoPosition={isAutoPosition}
        >
            {children}
        </AutoPosition>
    );
    useEffect(() => {
        return () => {
            /** 레이어에 children 없으면 레이어 삭제 */
            if (!layeredContainer.children.length) {
                layeredContainer.remove();
            }
        };
    }, [children, layeredContainer]);
    return {
        layeredChildren,
        layeredContainer,
    };
};
