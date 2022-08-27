import { userAPI } from '../../api/api'
import { loginApi, ResponseType } from '../auth/Login/loginApi'
import { AppThunk } from '../../app/store'
import { setAppIsInitAC } from '../auth/authReducer'

export type ProfileActionsType =
  | setProfileUserACType
  | resetProfileUserDataACType
  | setNewUsserNameACType

const initialState: ResponseType = {
  _id: '',
  email: '',
  name: '',
  avatar: '',
  publicCardPacksCount: 0,
  created: null,
  updated: null,
  isAdmin: false,
  verified: false,
  rememberMe: false,
}

export type ProfileStateType = typeof initialState

export const profileReducer = (
  state: ResponseType = initialState,
  action: ProfileActionsType
): ProfileStateType => {
  switch (action.type) {
    case 'PROFILE/SET-PROFILE-USER':
      return action.userData
    case 'PROFILE/RESET-PROFILE-USER-DATA':
      return {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,
        created: null,
        updated: null,
        isAdmin: false,
        verified: false,
        rememberMe: false,
      }
    case 'PROFILE/SET-NEW-USER-NAME':
      return { ...state, name: action.updatedUser.name }
    default: {
      return state
    }
  }
}
// Actions

export const setProfileUserAC = (userData: ResponseType) =>
  ({ type: 'PROFILE/SET-PROFILE-USER', userData } as const)
const resetProfileUserDataAC = () => ({ type: 'PROFILE/RESET-PROFILE-USER-DATA' } as const)

export const setNewUsserNameAC = (updatedUser: ResponseType) =>
  ({ type: 'PROFILE/SET-NEW-USER-NAME', updatedUser } as const)
//Thunk

export const logOutTC = (): AppThunk => async (dispatch) => {
  try {
    await loginApi.logOut()
    dispatch(resetProfileUserDataAC())
  } catch (error) {
    alert(error)
  }
}

export const changeNameUserTC =
  (newName: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setAppIsInitAC(false))
      const { data } = await userAPI.changeNameUser(newName)
      dispatch(setNewUsserNameAC(data.updatedUser))
      dispatch(setAppIsInitAC(true))
    } catch (error) {
      alert(error)
    }
  }

export type setProfileUserACType = ReturnType<typeof setProfileUserAC>
export type resetProfileUserDataACType = ReturnType<typeof resetProfileUserDataAC>
export type setNewUsserNameACType = ReturnType<typeof setNewUsserNameAC>
