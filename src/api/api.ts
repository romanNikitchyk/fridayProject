import axios from 'axios'

export const instance = axios.create({
  // baseURL: 'http://localhost:7542/2.0/',
  // baseURL: 'https://neko-back.herokuapp.com/2.0',
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:7542/2.0/'
      : 'https://neko-back.herokuapp.com/2.0',
  withCredentials: true,
})

type UerDataType = {
  email: string
  password: string
  rememberMe: boolean
}
export const userAPI = {
  getUsers(userData: UerDataType) {
    return instance.post('/auth/login', userData)
  },
  logOut() {
    return instance.delete('/auth/me', {})
  },
}
