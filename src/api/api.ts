import axios from 'axios'
import { ResponseType } from '../features/auth/Login/loginApi'

export const instance = axios.create({
  // baseURL: 'http://localhost:7542/2.0/',
  // baseURL: 'https://neko-back.herokuapp.com/2.0',
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:7542/2.0'
      : 'https://neko-back.herokuapp.com/2.0',
  withCredentials: true,
})

export const userAPI = {
  me() {
    return instance.post<ResponseType>('/auth/me')
  },
  forgotPassword(data: any) {
    return instance.post<forgotPasswordResponseType>('/auth/forgot', data)
  },
  logOut() {
    return instance.delete('/auth/me', {})
  },
  changeNameUser(newName: string) {
    return instance.put<ResponseTypeUpdateUser>('/auth/me', { name: newName, avatar: '' })
  },
}

export type forgotPasswordResponseType = {
  info: string
  error: string
}
export type forgotPasswordParamsType = {
  email: string
  from: string
  message: string
}
export type ResponseTypeUpdateUser = {
  updatedUser: ResponseType
  error?: string
}
