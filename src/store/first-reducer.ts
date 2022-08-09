


export type FirstActionsType = { type: '' }

const initialState = {}
export type FirstStateType = typeof initialState


export const firstReducer = (state: FirstStateType = initialState, action: FirstActionsType): FirstStateType => {
    switch (action.type) {
        default: {
            return state
        }
    }
}