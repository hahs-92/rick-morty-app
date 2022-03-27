export const INITAL_STATE = {
    characters: [],
    charactersSearched:[],
    charactersByQuery: [],
    favorites: JSON.parse(window.localStorage.getItem("favs")) || [],
    character: null,
    totalPages: 0,
    page: 1,
    loading: false,
    error: false,
}
