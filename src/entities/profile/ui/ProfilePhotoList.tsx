import { DragEventHandler, FormEventHandler, useCallback, useEffect } from "react";

import { FlexDiv } from "@shared/ui";

import { useProfileStore } from "../model/store";
import { ProfilePhoto } from "./ProfilePhoto";

const makeProfileImageArray = (profileImages: string[]): (string | null)[] => {
    const nullLength = 4 - profileImages.length;
    return profileImages.concat(Array(nullLength).fill(null));
};

export const ProfilePhotoList = () => {
    const {
        moveProfileImageByIndex,
        upLoadProfileImage,
        profile: {
            AboutYou: { Photo },
        },
    } = useProfileStore();

    useEffect(() => {
        return () => {
            const canvasForDrag = document.getElementById("canvas-drag");
            canvasForDrag?.remove();
        };
    }, []);
    const handleDragOver = useCallback<DragEventHandler<HTMLDivElement>>((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    const handleDragLeave = useCallback<DragEventHandler<HTMLDivElement>>((e) => {
        const eventSource = e.target;
        let eventTarget;
        if (eventSource instanceof Element) {
            eventTarget = eventSource.closest("[data-index]");
        }
        if (!eventTarget) return;
        if (!eventTarget.contains(e.relatedTarget as Node)) {
            eventTarget.classList.remove("on-file-drag");
        }
    }, []);
    const handleDragEnter = useCallback<DragEventHandler<HTMLDivElement>>((e) => {
        const eventSource = e.target;
        let eventTarget;
        if (eventSource instanceof Element) {
            eventTarget = eventSource.closest("[data-index]");
        }
        if (!eventTarget) return;
        if (!eventTarget.contains(e.relatedTarget as Node) && e.relatedTarget) {
            eventTarget.classList.add("on-file-drag");
        }
    }, []);
    const handleDrop = useCallback<DragEventHandler<HTMLDivElement>>((e) => {
        e.preventDefault();
        e.stopPropagation();
        const droppedFiles = e.dataTransfer.files;
        const eventSource = e.target;
        let eventTarget;
        if (eventSource instanceof Element) {
            eventTarget = eventSource.closest("[data-index]");
        }
        if (!eventTarget) return;
        const index = Number(eventTarget.getAttribute("data-index"));
        if (Number.isNaN(index)) return;
        if (droppedFiles.length > 0 && e.dataTransfer.items.length === 1) {
            const imageFile = Array.from(droppedFiles).find((file) =>
                file.type.startsWith("image/")
            );
            if (imageFile) {
                const imageURL = URL.createObjectURL(imageFile);
                upLoadProfileImage(imageURL, index);
            }
        }
        const transferredPictureIndex = parseInt(e.dataTransfer.getData("picture-index"));
        if (
            typeof transferredPictureIndex === "number" &&
            Number.isInteger(transferredPictureIndex)
        ) {
            moveProfileImageByIndex(transferredPictureIndex, index);
        }
        eventTarget.classList.remove("on-file-drag");
    }, []);
    const handleDragEnd = useCallback<DragEventHandler<HTMLDivElement>>((e) => {
        const eventSource = e.target;
        let eventTarget;
        if (eventSource instanceof Element) {
            eventTarget = eventSource.closest("[data-index]");
        }
        if (!eventTarget) return;
        eventTarget.classList.remove("on-file-drag");
    }, []);
    const handleDragStart = useCallback<DragEventHandler<HTMLDivElement>>(
        (e) => {
            const eventSource = e.target;
            let eventTarget;
            if (eventSource instanceof Element) {
                eventTarget = eventSource.closest("[data-index]");
            }
            if (!eventTarget) return;
            const imageElement = eventTarget.querySelector("img");
            let canvasForDrag = document.getElementById("canvas-drag") as HTMLCanvasElement;
            const index = Number(eventTarget.getAttribute("data-index"));
            if (Number.isNaN(index)) return;
            if (imageElement) {
                if (!canvasForDrag) {
                    canvasForDrag = document.createElement("canvas");
                    canvasForDrag.id = "canvas-drag";
                    canvasForDrag.height = 800;
                    canvasForDrag.width = 800;
                    canvasForDrag.style.position = "fixed";
                    canvasForDrag.style.left = "-99999px";
                    canvasForDrag.style.top = "-99999px";
                    document.body.appendChild(canvasForDrag);
                }
                e.dataTransfer.setData("picture-index", index.toString());
                const canvas = canvasForDrag;
                const ctx = canvas.getContext("2d");
                ctx?.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height);
                e.dataTransfer.setDragImage(
                    canvas,
                    imageElement.width / 2,
                    imageElement.height / 2
                );
            }
        },
        [Photo]
    );
    const handleUploadImage = useCallback<FormEventHandler<HTMLDivElement>>((e) => {
        const inputElement = e.target;
        if (!(inputElement instanceof HTMLInputElement)) return;
        let eventTarget;
        if (inputElement instanceof Element) {
            eventTarget = inputElement.closest("[data-index]");
        }
        if (!eventTarget) return;
        const index = Number(eventTarget.getAttribute("data-index"));
        if (inputElement.files?.length) {
            const newImage = inputElement.files[0];
            const imageURL = URL.createObjectURL(newImage);
            upLoadProfileImage(imageURL, index);
        }
    }, []);
    return (
        <FlexDiv
            direction="row"
            gap={20}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDragEnter={handleDragEnter}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            onChange={handleUploadImage}
        >
            {makeProfileImageArray(Photo).map((aProfile, index) => (
                <ProfilePhoto src={aProfile} index={index} key={`profile-image-${index}`} />
            ))}
        </FlexDiv>
    );
};
