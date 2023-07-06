import { ILoginApi } from 'core/interceptor/api/login.interface'
import { signIn } from './../../api/auth.api'

export default class LoginService {
    async login(params: ILoginApi) {
        try {
            const data = await signIn({...params})
            return data
        } catch (error) {
            console.log(error)
        }
    }
}