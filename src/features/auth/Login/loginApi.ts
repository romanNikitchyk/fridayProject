import { instance } from '../../../api/api'

export type LoginParamsType = {
  email: string
  password: string
  rememberMe: boolean
}
export type ResponseType = {
  _id: string
  email: string
  name: string
  avatar: string
  publicCardPacksCount: number
  // количество колод

  created: Date
  updated: Date
  isAdmin: boolean
  verified: boolean // подтвердил ли почту
  rememberMe: boolean

  error?: string
}

export const loginApi = {
  login(data: LoginParamsType) {
    return instance.post<ResponseType>('/auth/login', data)
  },
}
