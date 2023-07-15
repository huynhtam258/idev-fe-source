export default () => {
    const config = useRuntimeConfig();
    const url = config.public.url;

    const get = async<T>(endpoint: string) => {
        return useFetch<T>(`${url}/${endpoint}`)
    }

    return {
        get
    }
}