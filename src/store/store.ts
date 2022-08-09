import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {FirstActionsType, firstReducer} from './first-reducer';
import {SecondActionsType, secondReducer} from './second-reducer';


const rootReducer = combineReducers({
    first: firstReducer,
    second: secondReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))


export type AppActionsType = FirstActionsType | SecondActionsType

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>