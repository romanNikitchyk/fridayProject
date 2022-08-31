import { AppThunk } from '../../app/store'
import { setProfileUserAC } from '../Profile/profileReducer'
import { setIsLoggedInAC } from './Login/loginReducer'
import { authApi } from './authApi'

const initialState: InitialStateType = {
  isInitialized: false,
  messageText: '',
  message: false,
  error: false,
  errorText: '',
}

export const authReducer = (
  state: InitialStateType = initialState,
  action: AuthReducerActionsType
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-IS-INIT':
      return { ...state, isInitialized: action.isInitialized }
    case 'APP/SET-IS-ERROR':
      return { ...state, error: action.payload2, errorText: action.payload }
    case 'APP/SET-IS-MESSAGE':
      return { ...state, message: action.payload, messageText: action.payload2 }
    default:
      return state
  }
}

export type InitialStateType = {
  isInitialized: boolean
  message: boolean
  messageText: string
  error: boolean
  errorText: string
}

export const setAppIsInitAC = (isInitialized: boolean) =>
  ({ type: 'APP/SET-IS-INIT', isInitialized } as const)
export const setErrorStatusAC = (error: boolean, errorText: string) => {
  return { type: 'APP/SET-IS-ERROR', payload: errorText, payload2: error } as const
}
export const setMessageTextAC = (Message: boolean, messageText: string) => {
  return { type: 'APP/SET-IS-MESSAGE', payload: Message, payload2: messageText } as const
}

export type AuthReducerActionsType =
  | SetAppIsInitACType
  | SetErrorStatusACType
  | SetMessageTextACType
export type SetAppIsInitACType = ReturnType<typeof setAppIsInitAC>
export type SetErrorStatusACType = ReturnType<typeof setErrorStatusAC>
export type SetMessageTextACType = ReturnType<typeof setMessageTextAC>

export const initAppTC = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setAppIsInitAC(false))
      let res = await authApi.me()
      dispatch(setIsLoggedInAC(true))
      dispatch(setProfileUserAC(res.data))
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
