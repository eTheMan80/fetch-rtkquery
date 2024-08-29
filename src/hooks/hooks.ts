import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../services/store/store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export const useAppStateSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatchSelector: () => AppDispatch = useDispatch