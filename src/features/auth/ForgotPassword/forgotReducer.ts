import { AppThunk } from '../../../app/store'
import { setAppIsInitAC, setErrorStatusAC, setMessageTextAC } from '../authReducer'
import { FormikDataType } from './ForgotPassword/ForgotPassword'
import { forgotApi } from './forgotApi'

export const forgotPasswordTC = (email: FormikDataType): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setAppIsInitAC(false))
      let data = {
        ...email, // кому восстанавливать пароль
        from: 'cards-nya <neko.nyakus.cafe@gmail.com>',
        // можно указать разработчика фронта)
        message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='https://sssromaz.github.io/fridayProject/#/set-new-password/$token$'>
link</a>
</div>`, // хтмп-письмо, вместо $token$ бэк вставит токен
      }
      let res = await forgotApi.forgotPassword(data)
      dispatch(setMessageTextAC(true, res.data.info))
      setTimeout(() => {
        dispatch(setMessageTextAC(false, ''))
      }, 6000)
    } catch (error: any) {
      dispatch(setErrorStatusAC(true, error.response.data.error))
      setTimeout(() => {
        dispatch(setErrorStatusAC(false, ''))
      }, 6000)
    } finally {
      dispatch(setAppIsInitAC(true))
    }
  }
}
export const newPasswordTC = (password: string, resetPasswordToken: string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setAppIsInitAC(false))
      let data = { password, resetPasswordToken }
      let res = await forgotApi.newPassword(data)
      dispatch(setMessageTextAC(true, res.data.info))
      setTimeout(() => {
        dispatch(setMessageTextAC(false, ''))
      }, 6000)
    } catch (error: any) {
      dispatch(setErrorStatusAC(true, error.response.data.error))
      setTimeout(() => {
        dispatch(setErrorStatusAC(false, ''))
      }, 6000)
    } finally {
      dispatch(setAppIsInitAC(true))
    }
  }
}
