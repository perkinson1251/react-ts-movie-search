import axios from "axios";
import configFile from "config.json";

const api = axios.create({
    baseURL: configFile.apiUrl,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

        if (!expectedError && process.env.NODE_ENV === "development") {
            console.log(error);
        }
        return Promise.reject(error);
    }
);

const moviesService = {
    getSearchResults: async (payload: SearchPayloadProps) => {
        const { data } = await api.get("", {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                s: payload.movieName,
            },
        });
        return data;
    },
    getMovieInfo: async (payload: SearchFilmPayloadProps) => {
        const { data } = await api.get("", {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                i: payload.id,
                plot: "full",
            },
        });
        return data;
    },
};

export default moviesService;

interface SearchPayloadProps {
    movieName: string;
}

interface SearchFilmPayloadProps {
    id: string;
}
