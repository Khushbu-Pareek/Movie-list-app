const GET_SHOW_API = "http://www.omdbapi.com/?i=tt3896198&apikey=b4bf74d5";

const getMyShowURL = searchInput => `${GET_SHOW_API}&s=${searchInput}`;

export {
    getMyShowURL
};