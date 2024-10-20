import { useCallback, useState } from "react";

import axios from "axios";
import { SetupWorker } from "msw/browser";

/** Dev환경에서 우측 상단의 툴박스 (Mock Api이외에 더 추가된다면 공통적으로 쓰게 이동.) */
export const MockApiSetter = ({ worker }: { worker: SetupWorker }) => {
    /** 툴박스 열림 여부 */
    const [isOpen, setIsOpen] = useState<boolean>(false);
    /** MockApi 서버 On/Off 여부 */
    const [isMockApi, setIsMockApi] = useState<boolean>(false);
    /** 서버 크기/켜기 */
    const toggleWorker = useCallback(async (worker: SetupWorker, isWorkerLive: boolean) => {
        isWorkerLive ? worker.stop() : await worker.start();
        setIsMockApi((prev) => !prev);
    }, []);
    /** ToolBox 열기/닫기 */
    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };
    /** TEXT 입력하는 것 받는 것 */
    const [jsonText, setJsonText] = useState<string>("");

    return (
        <>
            {!isOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "110px",
                        height: "70px",
                        background: "red",
                        opacity: "0.4",
                        clipPath: "polygon(0px 0px, 100% 0px, 100% 100%)",
                        cursor: "pointer",
                    }}
                    onClick={toggleOpen}
                >
                    <span
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "5px",
                            fontWeight: 700,
                        }}
                    >
                        개발도구
                    </span>
                </div>
            )}
            {isOpen && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        right: 0,
                        top: 0,
                        width: "400px",
                        height: "fit-content",
                        position: "absolute",
                        opacity: 0.9,
                        backgroundColor: "#DCDCDC",
                        borderRadius: "3px",
                        alignItems: "center",
                        justifyContent: "space-around",
                        gap: "20px",
                        padding: "20px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <h3>Mock Api Server</h3>
                        <div
                            style={{
                                width: "10px",
                                height: "10px",
                                border: "0.5px solid black",
                                borderRadius: "100%",
                                backgroundColor: isMockApi ? "greenyellow" : "red",
                            }}
                        />
                        {/* 서버 On/Off 버튼 */}
                        <div
                            style={{
                                display: "flex",
                                width: "80px",
                                height: "35px",
                                alignItems: "center",
                                border: "1px solid blue",
                                borderRadius: "30px",
                                padding: "3px",
                                cursor: "pointer",
                                userSelect: "none",
                            }}
                            onClick={() => {
                                toggleWorker(worker, isMockApi);
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "40px",
                                    height: "30px",
                                    border: "1px solid blue",
                                    backgroundColor: `${isMockApi ? "skyblue" : "red"}`,
                                    borderRadius: "100px",
                                    transform: `translate(${isMockApi ? "0" : "30px"},0)`,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontWeight: 700,
                                    transition: "linear 0.2s",
                                }}
                            >
                                {isMockApi ? "On" : "Off"}
                            </div>
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                width: "30px",
                                height: "30px",
                                background: "red",
                                clipPath: "polygon(0px 0px, 100% 100%, 0px 100%)",
                                left: 0,
                                bottom: 0,
                                cursor: "pointer",
                            }}
                            onClick={toggleOpen}
                        />
                    </div>
                    <div>
                        <div>Api 목록</div>
                        <br />
                        {worker.listHandlers().map((aHttpHandler) => {
                            const [method, requestUrl] = aHttpHandler.info.header.split(" ");
                            return (
                                <div
                                    key={`${method}-${requestUrl}`}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "start",
                                        marginTop: "10px",
                                    }}
                                >
                                    <div style={{ fontWeight: 700, width: "60px" }}>{method}</div>
                                    <div>{requestUrl}</div>
                                    <button
                                        onClick={() => {
                                            /** json 형식으로 파싱 */
                                            const req = JSON.parse(
                                                jsonText.length > 0 ? jsonText : "{}"
                                            );
                                            /** 요청 보내기 */
                                            axios
                                                .request({
                                                    method: method,
                                                    url: requestUrl,
                                                    data: req,
                                                })
                                                .then((res) => {
                                                    console.log("req : ", req);
                                                    console.log("res : ", res);
                                                });
                                        }}
                                    >
                                        api 발사
                                    </button>
                                </div>
                            );
                        })}
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span>body:</span>
                            <textarea
                                value={jsonText}
                                onChange={(e) => {
                                    setJsonText(e.target.value);
                                }}
                                placeholder="JSON 형식에 맞춰 넣으면 보낼때 알아서 파싱"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
