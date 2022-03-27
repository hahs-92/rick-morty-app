export const INITAL_STATE = {
    characters: [],
    charactersSearched:[],
    charactersByQuery: [],
    favorites: JSON.parse(window.localStorage.getItem("favs")) || [],
    character: null,
    totalPages: 0,
    page: 1,
    query: { key: "", value: ""},
    loading: false,
    error: false,
}
