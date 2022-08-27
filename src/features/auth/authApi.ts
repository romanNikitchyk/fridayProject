import { instance } from '../../api/api'
import { ResponseType } from './Login/loginApi'

export const authApi = {
  me() {
    return instance.post<ResponseType>('/auth/me')
  },
}
