import styled from "@emotion/styled";

import { Icon } from "./Icon";

const Spinner = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    & > * {
        animation: spin 2s infinite;
        @keyframes spin {
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;

export const Loader = (props: Omit<React.ComponentProps<typeof Icon>, "type" | "css">) => {
    return (
        <Spinner>
            <Icon type="loading" {...props} />
        </Spinner>
    );
};
