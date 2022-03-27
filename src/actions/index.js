import axios from 'axios'
//actions types
import { characterTypes } from '../types'

export const getCharacters = (query) => async(dispatch) => {
    dispatch({
        type: characterTypes.LOADING
    })

    try {
        const {data: { results, info }} = await axios.get(query)

        dispatch({
            type: characterTypes.GET_CHARACTERS,
            payload: {results,  totalPages: info.pages }
        })
    } catch(e) {

        dispatch({
            type: characterTypes.ERROR
        })
    }
}

export const getCharactersSearch = (query) => async(dispatch) => {
    dispatch({
        type: characterTypes.LOADING
    })

    try {
        const {data: { results }} = await axios.get(query)

        dispatch({
            type: characterTypes.GET_CHARACTERS_SEARCHED,
            payload: results
        })
    } catch(e) {

        dispatch({
            type: characterTypes.ERROR
        })
    }
}

export const getCharactersByQuery = (query) => async(dispatch) => {
    dispatch({
        type: characterTypes.LOADING
    })

    try {
        const {data: { results }} = await axios.get(query)

        dispatch({
            type: characterTypes.GET_CHARACTERS_BY_QUERY,
            payload: results
        })
    } catch(e) {

        dispatch({
            type: characterTypes.ERROR
        })
    }
}

export const addCharacterToFavorites = (character) => async(dispatch) => {

    try {
        dispatch({
            type: characterTypes.ADD_CHARACTER_FAV,
            payload: character
        })
    } catch(e) {

        dispatch({
            type: characterTypes.ERROR
        })
    }
}

export const removeCharacterFromFavorites = (characterId) => async(dispatch) => {

    try {
        dispatch({
            type: characterTypes.REMOVE_CHARACTER_DEV,
            payload: characterId
        })
    } catch(e) {

        dispatch({
            type: characterTypes.ERROR
        })
    }
}

export const getCharacter = (query) => async(dispatch) => {
    dispatch({
        type: characterTypes.LOADING
    })

    try {
        const { data } = await axios.get(query)

        dispatch({
            type: characterTypes.GET_CHARACTER,
            payload: data
        })
    } catch(e) {

        dispatch({
            type: characterTypes.ERROR
        })
    }
}


export const setPage = (page) => async(dispatch) => {
    dispatch({
        type: characterTypes.SET_PAGE,
        payload: page
    })
}

export const setQuery = (query) => async(dispatch) => {
    dispatch({
        type: characterTypes.SET_QUERY,
        payload: query
    })
}
