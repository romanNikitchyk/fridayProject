import axios, { AxiosError } from 'axios'
import { AppDispatch } from '../../app/store'
import { setErrorStatusAC } from '../../features/auth/authReducer'

export const errorHandler = (
  error: Error | AxiosError<{ error: string }>,
  dispatch: AppDispatch
): void => {
  const err = error as Error | AxiosError<{ error: string }>

  if (axios.isAxiosError(err)) {
    dispatch(setErrorStatusAC(true, err.response?.data ? err.response.data.error : error.message))
    setTimeout(() => {
      dispatch(setErrorStatusAC(false, ''))
    }, 6000)
  }
}
