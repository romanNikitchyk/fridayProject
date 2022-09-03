import { AppDispatch } from '../../app/store'
import { setErrorStatusAC } from '../../features/auth/authReducer'

export const messageHandler = (message: string, dispatch: AppDispatch): void => {
  dispatch(setErrorStatusAC(true, message))
  setTimeout(() => {
    dispatch(setErrorStatusAC(false, ''))
  }, 6000)
}
