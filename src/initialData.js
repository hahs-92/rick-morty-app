export const INITAL_STATE = {
    characters: [],
    charactersSearched:[],
    charactersByQuery: [],
    favorites: JSON.parse(window.localStorage.getItem("favs")) || [],
    character: null,
    loading: false,
    error: false,
}
