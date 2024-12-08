import { Icon } from "@shared/Icon";

import { useTheme } from "@emotion/react";

import { Badge } from "../Badge/Badge";

type ChipProps = {
    index: number;
    value: string;
    onDelete: (index: number) => void;
    isDeleteable: boolean;
};

export const Chip = ({ index, value, onDelete, isDeleteable }: ChipProps) => {
    const theme = useTheme();
    return (
        <div
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
                {value}
                <div
                    onClick={() => {
                        onDelete(index);
                    }}
                    css={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        margin: "auto auto",
                    }}
                >
                    {isDeleteable && <Icon type="x" size={"xs"} />}
                </div>
            </Badge>
        </div>
    );
};
