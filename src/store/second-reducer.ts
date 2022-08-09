


export type SecondActionsType = { type: '' }

const initialState = {}
export type SecondStateType = typeof initialState


export const secondReducer = (state: SecondStateType = initialState, action: SecondActionsType): SecondStateType => {
    switch (action.type) {
        default: {
            return state
        }
    }
}