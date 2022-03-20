// Got the following endpoints from https://developers.themoviedb.org/

export const API_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

export const API_KEY = process.env.API_KEY;


export const POPULAR_MOVIES_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

export const POPULAR_SHOWS_URL = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`;

export const TOP_RATED_MOVIES = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;

export const TOP_RATED_SHOWS = `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US`;


export const fetchMovie = async movieId => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
    return await (await fetch(endpoint)).json();
}
export const fetchTVShow = async tvId => {
    const endpoint = `${API_URL}tv/${tvId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
    return await (await fetch(endpoint)).json();
}

