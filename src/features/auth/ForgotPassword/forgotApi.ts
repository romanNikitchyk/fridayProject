import { instance } from '../../../api/api'

export const forgotApi = {
  forgotPassword(data: ForgotPasswordParamsType) {
    return instance.post<ForgotPasswordResponseType>('/auth/forgot', data)
  },
}

export type ForgotPasswordResponseType = {
  info: string
  error: string
}
export type ForgotPasswordParamsType = {
  email?: string
  from: string
  message: string
}
