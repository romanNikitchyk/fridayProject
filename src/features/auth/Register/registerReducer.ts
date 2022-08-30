import { registerAPI } from './registerAPI'
import { AppThunk } from '../../../app/store'
import { setErrorStatusAC } from '../authReducer'

export type RegisterActionsType = ReturnType<typeof setIsRegister>

const initialState = {
  isRegister: false,
}
export type RegisterStateType = typeof initialState

export const registerReducer = (
  state: RegisterStateType = initialState,
  action: RegisterActionsType
): RegisterStateType => {
  switch (action.type) {
    case 'REGISTER/SET-IS_REGISTER': {
      return {
        ...state,
        isRegister: action.isRegister,
      }
    }
    default: {
      return state
    }
  }
}

// * Action Creator * //

export const setIsRegister = (isRegister: boolean) =>
  ({
    type: 'REGISTER/SET-IS_REGISTER',
    isRegister,
  } as const)

// * thunk * //

export const signUpTC =
  (user: string, password: string): AppThunk =>
  async (dispatch) => {
    // loading true
    try {
      const res = await registerAPI.register(user, password)
      dispatch(setIsRegister(true))
    } catch (error: any) {
      dispatch(setErrorStatusAC(true, error.response.data.error))
      setTimeout(() => {
        dispatch(setErrorStatusAC(false, ''))
      }, 6000)
    }
    // finally -> loading false
  }
