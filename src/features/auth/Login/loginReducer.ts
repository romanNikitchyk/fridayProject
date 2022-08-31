import { loginApi, LoginParamsType } from './loginApi'
import { setProfileUserAC } from '../../Profile/profileReducer'
import { AppThunk } from '../../../app/store'
import { setAppIsInitAC, setErrorStatusAC } from '../authReducer'

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
  async (dispatch) => {
    try {
      dispatch(setAppIsInitAC(false))
      let res = await loginApi.login(data)
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

// types
export type LoginActionsType = ReturnType<typeof setIsLoggedInAC>
