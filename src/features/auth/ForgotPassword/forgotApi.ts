import { instance } from '../../../api/api'

export const forgotApi = {
  forgotPassword(data: ForgotPasswordParamsType) {
    return instance.post<ForgotPasswordResponseType>('/auth/forgot', data)
  },
  newPassword(data: NewPasswordDataType) {
    return instance.post<NewPasswordResponseType>('/auth/set-new-password', data)
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

export type NewPasswordDataType = {
  password: string
  resetPasswordToken: string
}
export type NewPasswordResponseType = {
  info: string
  error: string
}
