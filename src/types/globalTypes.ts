export interface FetchFunctionParams<P = undefined | string> {
    params?: P;
    signal?: AbortSignal;
}

export interface CustomFetchHook<T, P> {
    setData: (data: T[]) => void;
    serviceFunction: ({
        params,
        signal,
    }: FetchFunctionParams<P>) => Promise<T[]>;
    params?: P;
    isMutate: boolean;
}
