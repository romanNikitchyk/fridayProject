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
  changeNameUser(newName: string) {
    return instance.put<ResponseTypeUpdateUser>('/auth/me', { name: newName, avatar: '' })
  },
}

export type ResponseTypeUpdateUser = {
  updatedUser: ResponseType
  error?: string
}
