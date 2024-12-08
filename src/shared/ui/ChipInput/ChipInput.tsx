import { Icon } from "@shared/Icon";

import { useTheme } from "@emotion/react";

import { Chip } from "./ChipInput.Chip";
import { useChipInput } from "./hooks/useChipInput";

type ChipInputProps = {
    defaultValue?: string[];
    onEditFinish?: (values: string[]) => void;
};

export const ChipInput = ({ defaultValue, onEditFinish }: ChipInputProps) => {
    const theme = useTheme();
    const {
        value,
        isEditMode,
        toggleEditMode,
        handleKeyDown,
        handlePaste,
        handleMouseEnter,
        handleMouseLeave,
        handleInput,
        handleBeforeInput,
        handleDeleteChip,
        containerRef,
    } = useChipInput(defaultValue, onEditFinish);
    return (
        <div
            css={{
                position: "relative",
                display: "block",
                overflow: "hidden",
                maxWidth: "100%",
            }}
        >
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
                    lineHeight: "31px",
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
                    <ChipInput.Chip
                        key={`attribute-${index}-${aValue}`}
                        index={index}
                        value={aValue}
                        onDelete={handleDeleteChip}
                        isDeleteable={isEditMode}
                    />
                ))}
            </div>
            {!isEditMode && (
                <div
                    onClick={toggleEditMode}
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

ChipInput.Chip = Chip;
