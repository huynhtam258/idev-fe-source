import useWpApi from './../../../composables/useApi'

export default class HomeService {
    async getHome() {
        try {
            const result = await useWpApi().fetchData<unknown>('/api/home')
            return result
        } catch (error) {
        return null 
        }
    }
}