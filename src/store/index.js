import { createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
//reducer
import { characterReducer } from '../reducers'

export const store = createStore(characterReducer, applyMiddleware(thunk))