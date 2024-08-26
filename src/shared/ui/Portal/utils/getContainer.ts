/** zIndex가 없으면 container가 그대로 Container가 됨.
 *
 * zIndex가 있으면 container에 Layer를 추가하고 해당 div가 Container가 됨.
 */
export const getContainer = (container: HTMLElement, zIndex?: number) => {
    /** id===layer-${zIndex}인 컴포넌트 있으면 찾기.
     * TODO: container가 다를경우 id값에 prefix로 추가해주기. 2024.08.26 윤동근
     */
    let layeredContainer = zIndex ? document.getElementById(`layer-${zIndex}`) : container;
    /** id===layer-${zIndex}인 컴포넌트 없으면, 추가해주고, 해당 컴포넌트 return 한다. */
    if (!layeredContainer) {
        const containerElement = document.createElement("div");
        containerElement.style.zIndex = zIndex ? zIndex.toString() : "";
        containerElement.style.position = "absolute";
        containerElement.style.left = "0";
        containerElement.style.top = "0";
        containerElement.id = `layer-${zIndex}`;
        containerElement.role = "presentation";
        layeredContainer = containerElement;
        container.appendChild(layeredContainer);
    }
    return layeredContainer;
};
