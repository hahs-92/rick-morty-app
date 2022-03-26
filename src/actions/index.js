import axios from 'axios'
//actions types
import { characterTypes } from '../types'

export const getCharacters = (query) => async(dispatch) => {
    dispatch({
        type: characterTypes.LOADING
    })

    try {
        const { data: results } = await axios.get(query)

        dispatch({
            type: characterTypes.GET_CHARACTERS,
            payload: results
        })
    } catch(e) {

        dispatch({
            type: characterTypes.ERROR
        })
    }
}
