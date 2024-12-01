import {
    ClipboardEventHandler,
    FormEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

import { Icon } from "@shared/Icon";

import { useTheme } from "@emotion/react";

import { Badge } from "../Badge/Badge";

type ChipInputProps = {
    defaultValue?: string[];
    onEditFinish?: (values: string[]) => void;
};

export const ChipInput = ({ defaultValue = [], onEditFinish }: ChipInputProps) => {
    const [value, setValue] = useState<string[]>(defaultValue);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const theme = useTheme();
    const isAfterDelete = useRef<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const handleKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((e) => {
        const inputKey = e.key;
        const editingElement = containerRef.current;
        if (editingElement) {
            if (e.key === "Process") {
                const range = document.createRange();
                const selection = window.getSelection();
                range.selectNodeContents(e.currentTarget);
                range.collapse(false);
                if (selection) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
            if (e.key === "Escape") {
                e.currentTarget.childNodes.forEach((aChild) => {
                    if (aChild.nodeType === Node.TEXT_NODE) {
                        aChild.remove();
                    }
                });
                e.currentTarget.scrollTo({ left: 0 });
                if (onEditFinish) {
                    onEditFinish(value);
                }
                setIsEditMode(false);
            }
            if (inputKey === "Enter") {
                e.preventDefault();
                const selection = window.getSelection();
                if (!selection) return;
                if (!(selection && selection.isCollapsed)) return;
                const range = selection.getRangeAt(0);
                const currentNode = range.endContainer;
                if (
                    currentNode === editingElement &&
                    editingElement.childNodes[range.endOffset - 1] instanceof Text
                ) {
                    const targetNode = editingElement.childNodes[range.endOffset - 1];
                    const addValue = targetNode.textContent?.trim();
                    if (!addValue?.length) return;
                    setValue((prev) => {
                        return [...prev, addValue];
                    });
                    targetNode.remove();
                } else if (currentNode instanceof Text) {
                    const addValue = currentNode.textContent?.trim();
                    if (!addValue?.length) return;

                    setValue((prev) => {
                        return [...prev, addValue];
                    });
                    currentNode.remove();
                }

                return;
            }
            if (inputKey === "Backspace" || inputKey === "Delete") {
                const selection = window.getSelection();

                if (selection) {
                    const range = selection.getRangeAt(0);
                    // 단일 선택일 경우
                    if (range.collapsed) {
                        const currentNode = range.startContainer;
                        let currentNodeIndex = -1;
                        if (
                            editingElement === currentNode &&
                            currentNode.nodeType !== Node.TEXT_NODE
                        ) {
                            e.preventDefault();
                            currentNodeIndex = range.startOffset - 1;
                        } else if (currentNode.nodeType === Node.TEXT_NODE) {
                            if (range.startOffset === 0) {
                                e.preventDefault();
                                const lastChildElement = currentNode.previousSibling;
                                if (lastChildElement instanceof Element) {
                                    currentNodeIndex =
                                        Number(lastChildElement.getAttribute("data-index")) ?? -1;
                                }
                            }
                        } else {
                            return;
                        }

                        if (currentNodeIndex >= 0) {
                            setValue((prev) => {
                                return [
                                    ...prev.slice(0, currentNodeIndex),
                                    ...prev.slice(currentNodeIndex + 1),
                                ];
                            });
                            isAfterDelete.current = true;
                        }

                        return;
                    } else {
                        const frontNode = range.startContainer;
                        const endNode = range.endContainer;
                        if (frontNode === endNode && frontNode instanceof Text) {
                            return;
                        }
                        if (endNode instanceof Text && frontNode === endNode.parentNode)
                            e.preventDefault();
                        endNode.textContent = endNode.textContent?.slice(range.endOffset) ?? "";
                        const lastChild = endNode.lastChild;
                        if (lastChild) {
                            range.selectNode(lastChild);
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                        return;
                    }
                }
            }
        }
    }, []);
    const handlePaste = useCallback<ClipboardEventHandler<HTMLDivElement>>((e) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text/plain");
        const cleanText = text.replace(/[\r\n]+/g, " ");

        // Selection API 사용하여 텍스트 삽입
        const selection = window.getSelection();
        if (!selection) return;
        const range = selection.getRangeAt(0);
        const frontNode = range.startContainer;
        const endNode = range.endContainer;
        if (frontNode === endNode && frontNode instanceof Text) {
            range.deleteContents();
            const textNode = document.createTextNode(cleanText);
            range.insertNode(textNode);

            // 커서 위치 조정
            range.selectNodeContents(textNode);
            selection.removeAllRanges();
            selection.addRange(range);
            e.currentTarget.scrollTo({ left: e.currentTarget.scrollWidth });
            return;
        }
    }, []);

    const handleMouseEnter = useCallback<MouseEventHandler<HTMLDivElement>>(() => {
        setIsHovered(true);
    }, []);
    const handleMouseLeave = useCallback<MouseEventHandler<HTMLDivElement>>(() => {
        setIsHovered(false);
    }, []);
    const handleInput = useCallback<FormEventHandler<HTMLDivElement>>((e) => {
        e.currentTarget.childNodes.forEach((aNode) => {
            if (aNode.textContent === "") {
                aNode.remove();
            }
        });
    }, []);
    const handleBeforeInput = useCallback<FormEventHandler<HTMLDivElement>>((e) => {
        const selection = window.getSelection();
        const lastChild = e.currentTarget.lastChild;
        if (lastChild?.nodeType === Node.TEXT_NODE) {
            const range = document.createRange();
            range.selectNode(lastChild);
            range.collapse(false);
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
            }
        } else {
            const range = document.createRange();
            if (lastChild) {
                range.selectNodeContents(e.currentTarget);
            } else {
                range.selectNode(e.currentTarget);
            }
            range.collapse(false);
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
    }, []);
    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const scrollElement = e.currentTarget as HTMLElement;
            if (isHovered) {
                scrollElement.scrollLeft += e.deltaY;
            }
        };

        if (isHovered) {
            container.addEventListener("wheel", handleWheel, { passive: false });
        }

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, [isHovered]);

    useLayoutEffect(() => {
        const editingElement = containerRef.current;
        const childNodes = editingElement?.childNodes;
        if (childNodes) {
            const textNodes = Array.from(childNodes).filter(
                (aChild) => aChild.nodeType === Node.TEXT_NODE
            );
            if (textNodes.length === 1) {
                const targetNode = textNodes[0];
                if (targetNode !== editingElement.lastChild) {
                    const clonedTextNode = targetNode.cloneNode();
                    targetNode.remove();
                    editingElement.appendChild(clonedTextNode);
                }
            }
        }
        if (editingElement) {
            const range = document.createRange();
            const selection = window.getSelection();
            if (selection) {
                const target = editingElement.lastChild;
                if (target) {
                    if (isAfterDelete.current) {
                        isAfterDelete.current = false;
                        return;
                    } else {
                        editingElement.scrollTo({ left: editingElement.scrollWidth });
                    }
                    if (target instanceof Text) {
                        range.selectNodeContents(target);
                    } else {
                        range.selectNode(target);
                    }
                    range.collapse(false);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        }
    }, [value]);

    useLayoutEffect(() => {
        if (isEditMode) {
            const editElement = containerRef.current;
            if (editElement) {
                editElement.scrollTo({ left: editElement.scrollWidth });
                const range = document.createRange();
                const selection = window.getSelection();
                if (selection) {
                    const lastChild = editElement.lastChild;
                    if (lastChild) {
                        range.setStartAfter(editElement.lastChild);
                        range.setEndAfter(editElement.lastChild);
                    } else {
                        range.selectNodeContents(editElement);
                    }
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        }
    }, [isEditMode]);

    return (
        <div css={{ position: "relative", display: "block", overflow: "hidden" }}>
            <div
                className="Chip-input"
                contentEditable={isEditMode}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onInput={handleInput}
                onBeforeInput={handleBeforeInput}
                suppressContentEditableWarning={isEditMode}
                ref={containerRef}
                css={{
                    position: "relative",
                    display: "block",
                    flex: 1,
                    padding: "9px 10px",
                    height: "51px",
                    minHeight: "51px",
                    overflowX: "auto",
                    overflowY: "hidden",
                    whiteSpace: "nowrap",
                    border: `1px solid ${theme.palette.grey[3]}`,
                    borderRadius: "10px",
                    backgroundColor: theme.palette.common.white,
                    gap: "10px",
                    clipPath: "inset(0 round 10px)",
                    verticalAlign: "middle",
                    "&.Chip-input": {
                        lineHeight: "31px",
                    },
                    "& *": {
                        lineHeight: 1,
                    },
                    "::-webkit-scrollbar": {
                        height: "1px",
                    },
                    "::-webkit-scrollbar-thumb": {
                        backgroundColor: "red",
                    },
                    ":focus": {
                        outline: "none",
                    },
                }}
            >
                {value.map((aValue, index) => (
                    <div
                        key={`attribute-${index}-${aValue}`}
                        data-index={index}
                        suppressContentEditableWarning={true}
                        contentEditable={false}
                        css={{
                            color: "blue",
                            display: "inline-block",
                            margin: "0 5px",
                            userSelect: "none",
                            verticalAlign: "middle",
                        }}
                    >
                        <Badge radius="full" backgroundColor={theme.palette.grey[0]}>
                            {aValue}
                            <div
                                onClick={() => {
                                    setValue((prev) => {
                                        const newValue = [
                                            ...prev.slice(0, index),
                                            ...prev.slice(index + 1),
                                        ];
                                        return newValue;
                                    });
                                }}
                                css={{
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    margin: "auto auto",
                                }}
                            >
                                {isEditMode && <Icon type="x" size={"xs"} />}
                            </div>
                        </Badge>
                    </div>
                ))}
            </div>
            {!isEditMode && (
                <div
                    onClick={() => {
                        setIsEditMode(true);
                    }}
                    css={{
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        cursor: "pointer",
                    }}
                >
                    <Icon type="edit" size={"xl"} color={theme.palette.primary[6]} />
                </div>
            )}
        </div>
    );
};
