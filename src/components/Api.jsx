import axios from "axios";

const apiKey = '95c03fa8f220c74a490bfd1f71b00bf8';
const baseUrl = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
    try {
        const response = await axios.get(
            `${baseUrl}/trending/movie/day?api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error('Error while fetching movies data:', error);
        return [];
    }
};

export const searchMovies = async query => {
    try {
        const response = await axios.get(
            `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`
        );
        return response.data.results;
    } catch (error) {
        console.error('Error while searching movies:', error);
            return [];
    }
};

export const getMovieDetails = async movieId => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/${movieId}?api_key=${apiKey}`
        );
        return response.data;
    } catch (error) {
        console.error('Error while fetching details:', error);
            return [];
    }
};

export const getMovieCredits = async movieId => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`
        );
        return response.data.cast;
    } catch (error) {
        console.error('Error while fetching movie credits:', error);
            return [];
    }
};

export const getMovieReviews = async movieId => {
    try {
        const response = await axios.get(
             `${baseUrl}/movie/${movieId}/reviews?api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error('Error while fetching movie reviews:', error);
            return [];
    }
};


