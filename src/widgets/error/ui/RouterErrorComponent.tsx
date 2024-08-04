import { useNavigate } from "react-router-dom";

type Props = {
    message: string;
};

/** Router Error 발생 시 보여주는 컴포넌트 */
export const RouterErrorComponent = ({ message }: Props) => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}
        >
            <div>{message}</div>
            <div>
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    홈으로 이동
                </button>
                <button
                    onClick={() => {
                        location.reload();
                    }}
                >
                    새로 고침
                </button>
            </div>
        </div>
    );
};
