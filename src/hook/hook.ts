import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>() // Already knows the state is `RootState`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // Already knows that `dispatch` can accept a thunk
