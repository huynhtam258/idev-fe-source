import { ILoginApi } from 'core/interceptor/api/login.interface'
import HttpService from './../module/http/http.service'

const _httpService = new HttpService()

export async function signIn(params: ILoginApi) {
    return await _httpService.post(`http://localhost:3066/api/auth/sign-in`, params)
}