import { useCallback, useEffect, useState } from "react";
import { CustomFetchHook, FetchFunctionParams } from "../types/globalTypes";
import axios from "axios";

const useFetchData = <T, P = undefined | string>({
    setData,
    serviceFunction,
    params,
    isMutate,
}: CustomFetchHook<T, P>) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const getData = useCallback(
        async ({ params, signal }: FetchFunctionParams<P> = {}) => {
            setLoading(true);
            setError("");
            try {
                const res = await serviceFunction({ params, signal });
                setData(res);
            } catch (e) {
                const errors = e as Error;
                if (axios.isAxiosError(e)) {
                    setError(e.response?.data?.message || e.message);
                } else {
                    setError(errors.message);
                }
            } finally {
                setLoading(false);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        const controller = new AbortController();
        if (isMutate) {
            getData({ params, signal: controller.signal });
        }
        return () => {
            controller.abort();
        };
    }, [getData, isMutate, params]);

    return {
        loading,
        error,
        getData,
    };
};

export default useFetchData;
