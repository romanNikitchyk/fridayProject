import { Dispatch } from 'redux'
import { loginApi, LoginParamsType } from './loginApi'

const initialState = {
  isLoggedIn: false,
}
type InitialStateType = typeof initialState

export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'login/SET-IS-LOGGED-IN':
      return { ...state, isLoggedIn: action.value }
    default:
      return state
  }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'login/SET-IS-LOGGED-IN', value } as const)

// thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
  loginApi
    .login(data)
    .then((res) => {
      alert(res)
      dispatch(setIsLoggedInAC(true))
    })

    .catch((error) => {
      alert(error)
    })
}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>
