import { instance } from '../../../api/api'

export type RegisterUserType = {
  addedUser: any
  error?: string
}

export const registerAPI = {
  register(email: string, password: string) {
    return instance.post<RegisterUserType>('/auth/register', { email, password })
  },
}
