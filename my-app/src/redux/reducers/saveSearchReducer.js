
const initialState = {
    searchValue: "",
    searchList: [],
    favourites: []
}
  
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SEARCH_QUERY':
            return {
                ...state,
                searchValue: payload
            };
    
        case 'SEARCH_LIST_RESULT':
            return {
                ...state,
                searchList: payload
            };

        case 'SAVE_FAVOURITES_LIST':
            return {
                ...state,
                favourites: state.favourites ? [ ...state.favourites, payload ]: [ payload ]
            };

        case 'REMOVE_FAVOURITES_LIST':
            return {
                ...state,
                favourites: state.favourites.filter(({ Title }) => Title !== payload.Title)
            };

        default:
            return state;
    }
  }
  
  export default rootReducer;