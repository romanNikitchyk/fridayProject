import { AppThunk } from '../../app/store'
import { setProfileUserAC } from '../profile/profileReducer'
import { setIsLoggedInAC } from './Login/loginReducer'
import { userAPI } from '../../api/api'
import { FormikDataType } from './ForgotPassword/ForgotPassword'

const initialState: InitialStateType = {
  isInitialized: false,
}

export const authReducer = (
  state: InitialStateType = initialState,
  action: AuthReducerActionsType
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-ISINIT':
      return { ...state, isInitialized: action.isInitialized }
    default:
      return { ...state }
  }
}

export type InitialStateType = {
  isInitialized: boolean
}

export const setAppIsInitAC = (isInitialized: boolean) =>
  ({ type: 'APP/SET-ISINIT', isInitialized } as const)

export type AuthReducerActionsType = ReturnType<typeof setAppIsInitAC>

export const InitAppTC = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setAppIsInitAC(false))
      let res = await userAPI.me()
      console.log(res)
      dispatch(setIsLoggedInAC(true))
      dispatch(setProfileUserAC(res.data))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setAppIsInitAC(true))
    }
  }
}
export const ForgotPasswordTC = (email: FormikDataType): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setAppIsInitAC(false))
      let data = {
        ...email, // кому восстанавливать пароль
        from: 'cards-nya <neko.nyakus.cafe@gmail.com>',
        // можно указать разработчика фронта)
        message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/#/set-new-password/$token$'>
link</a>
</div>`, // хтмп-письмо, вместо $token$ бэк вставит токен
      }
      let res = await userAPI.forgotPassword(data)
      console.log(res)
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setAppIsInitAC(true))
    }
  }
}
