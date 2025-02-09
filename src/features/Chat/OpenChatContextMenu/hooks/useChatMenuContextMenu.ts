import { MouseEvent, useCallback, useState } from "react";

import { useDeleteChatRoom } from "@entities/chat";

export const useChatContextMenu = (deleteRoom: () => void) => {
    const [activeContextMenuRoomId, setActiveContextMenuRoomId] = useState<string | null>(null);
    const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
    const isContextMenuOpen =
        typeof activeContextMenuRoomId === "string" && !isDeleteModal ? true : false;
    const [contextMenuPosition, setContextMenuPosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const { mutate: deleteChatRoom } = useDeleteChatRoom();
    const handleOpenRoomContextMenu = useCallback(
        (event: MouseEvent<HTMLLIElement>, roomId: string) => {
            event.preventDefault();
            setActiveContextMenuRoomId(roomId);
            setContextMenuPosition({ x: event.clientX, y: event.clientY });
        },
        []
    );
    // 메뉴 닫기
    const handleCloseContextMenu = () => {
        setActiveContextMenuRoomId(null);
    };
    // 삭제 모달 열기
    const handleOpenDeleteModal = () => {
        setIsDeleteModal(true);
        setActiveContextMenuRoomId(null);
    };
    // 삭제 모달 닫기
    const handleCloseDeleteModal = () => {
        setIsDeleteModal(false);
        setActiveContextMenuRoomId(null);
    };
    const handleClickDelete = () => {
        if (activeContextMenuRoomId) {
            deleteChatRoom(activeContextMenuRoomId);
            setIsDeleteModal(false);
            deleteRoom();
        }
    };
    return {
        isContextMenuOpen,
        handleOpenRoomContextMenu,
        handleCloseContextMenu,
        contextMenuPosition,
        isDeleteModal,
        handleOpenDeleteModal,
        handleCloseDeleteModal,
        handleClickDelete,
    };
};
