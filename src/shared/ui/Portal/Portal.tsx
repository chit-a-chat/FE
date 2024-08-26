import { ReactNode } from "react";

import { createPortal } from "react-dom";

import { usePortal } from "./hooks/useProtal";
import { Position } from "./types";

export type PortalProps = {
    zIndex?: number;
    container?: HTMLElement;
    position?: Position;
    anchorEl?: HTMLElement | null;
    children: ReactNode;
    isAutoPosition?: boolean;
};

/**
 * @param zIndex ex) 일반 < 100 < 팝업 <1000 < 모달 < 모달 팝업
 * @param container 포탈을 생성할 위치
 * @param anchorEl 기준점이 될 Element.
 * @param position 기준점으로 부터 위치.
 * @description position은 anchorElement 기준으로 위치가 정해짐.
 * container은 어느 컴포넌트에 portal을 띄울지 정하는 것.
 * container, anchorElement모두 document.body가 기본값
 * @example
 * ()=> {
 * const anchorElement = useRef<HTMLElement>(null);
 * return (
 *     <div ref={anchorElement}>
 *         <Portal
 *             zIndex={1}
 *             anchorEl={anchorElement.current}
 *             position={{ right:"0",top: "calc(100% + 10px)"}}>
 *             <div>포탈로 띄울 컴포넌트</div>
 *         </Portal>)
 *     </div>
 * }
 */
export const Portal = ({
    zIndex,
    children,
    anchorEl,
    position = { top: 0, left: 0 },
    container,
    isAutoPosition = false,
}: PortalProps) => {
    /** zIndex === 0이면 layeredContainer는 documnet.body가 된다.
     * zIndex !== 0이면 layeredContainer는 document.body에 추가된
     * <div id="layer-${zIndex}"></div>이 된다.
     */
    const { layeredChildren, layeredContainer } = usePortal({
        zIndex,
        children,
        anchorEl: anchorEl ?? document.body,
        position,
        container: container ?? document.body,
        isAutoPosition,
    });

    return createPortal(layeredChildren, layeredContainer);
};
