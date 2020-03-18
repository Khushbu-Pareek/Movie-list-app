/*
 * action types
 */

export const SEARCH_QUERY = 'SEARCH_QUERY';
export const SEARCH_LIST_RESULT = 'SEARCH_LIST_RESULT';
export const SAVE_FAVOURITES_LIST = 'SAVE_FAVOURITES_LIST';
export const REMOVE_FAVOURITES_LIST = 'REMOVE_FAVOURITES_LIST';

/*
 * action creators
 */

export function saveSearchQuery(query) {
    return { 
        type: SEARCH_QUERY, 
        payload: query 
    };
}

export function saveSearchList(list) {
    return { 
        type: SEARCH_LIST_RESULT, 
        payload: list 
    };
}

export function saveFaviourtesList(data) {
    return { 
        type: SAVE_FAVOURITES_LIST, 
        payload: data 
    };
}

export function removeFaviourtesList(data) {
    return { 
        type: REMOVE_FAVOURITES_LIST, 
        payload: data 
    };
}
