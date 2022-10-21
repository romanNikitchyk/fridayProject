import { loginApi, LoginParamsType } from './loginApi'
import { setProfileUserAC } from '../../Profile/profileReducer'
import { AppDispatch, AppThunk } from '../../../app/store'
import { setAppIsInitAC } from '../authReducer'
import { errorHandler } from '../../../common/utils/errorHandler'
import { AxiosError } from 'axios'

const initialState = {
  isLoggedIn: false,
}
type InitialStateType = typeof initialState

export const loginReducer = (
  state: InitialStateType = initialState,
  action: LoginActionsType
): InitialStateType => {
  switch (action.type) {
    case 'LOGIN/SET-IS-LOGGED-IN':
      return { ...state, isLoggedIn: action.value }
    default:
      return state
  }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'LOGIN/SET-IS-LOGGED-IN', value } as const)

// thunks
export const loginTC =
  (data: LoginParamsType): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setAppIsInitAC(false))
      let res = await loginApi.login(data)
      console.log(res)
      dispatch(setIsLoggedInAC(true))
      dispatch(setProfileUserAC(res.data))
    } catch (error) {
      errorHandler(error as AxiosError | Error, dispatch)
    } finally {
      dispatch(setAppIsInitAC(true))
    }
  }

// types
export type LoginActionsType = ReturnType<typeof setIsLoggedInAC>
