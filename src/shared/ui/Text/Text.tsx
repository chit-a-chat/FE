import { TTypoVariant } from "@shared/type";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Text = styled.span<{ typoVariant: TTypoVariant; color?: string }>(
    ({ theme, typoVariant, color }) =>
        css({
            ...theme.typo[typoVariant],
            color: color ?? theme.palette.grey[8],
            whiteSpace: "pre-wrap",
        })
);
