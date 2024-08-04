import { useEffect, useState } from "react";

import axios from "axios";

type Props = {
    isSuccess: boolean;
};
export const ExampleFetchComponent = ({ isSuccess }: Props) => {
    const [data, setData] = useState<string>();
    const [error, setError] = useState<Error>();
    useEffect(() => {
        const promise = axios.get("/");
        const delay = async (promise: Promise<unknown>) => {
            setData(
                (() => {
                    let status = "pending";
                    setTimeout(() => {
                        if (!isSuccess) {
                            setError(new Error("테스트 에러"));
                        }
                        status = "success";
                    }, 1000);
                    return () => {
                        if (status === "success") {
                            return "hello";
                        }
                        throw promise;
                    };
                })()
            );
        };
        delay(promise);
    }, []);
    useEffect(() => {
        if (error) {
            throw error;
        }
    }, [error]);

    return <div>테스트 입니다2.{data}</div>;
};
