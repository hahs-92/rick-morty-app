import { characterTypes } from '../types'
//initial state
import { INITAL_STATE } from '../initialData'


export const characterReducer = (state=INITAL_STATE, action) => {
    switch (action.type) {
        case characterTypes.ERROR:
            return { ...state, error: true, loading: false }
        case characterTypes.LOADING:
            return { ...state, loading: true }
        case characterTypes.GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                error: false,
                loading: false
            }

        default:
            return state
    }
}