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
                character: null,
                error: false,
                loading: false
            }
        case characterTypes.GET_CHARACTERS_SEARCHED:
            return {
                ...state,
                charactersSearched: action.payload,
                error: false,
                loading: false
            }
        case characterTypes.GET_CHARACTERS_BY_QUERY:
            return {
                ...state,
                charactersByQuery: action.payload,
                error: false,
                loading: false
            }
        case characterTypes.GET_CHARACTER:
            return {
                ...state,
                character: action.payload,
                error: false,
                loading: false
            }
        case characterTypes.ADD_CHARACTER_FAV:
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    action.payload
                ],
                error: false,
            }
        case characterTypes.REMOVE_CHARACTER_DEV:
            return {
                ...state,
                favorites: state.favorites.filter(char => char.id !== action.payload),
                error: false,
            }
        default:
            return state
    }
}