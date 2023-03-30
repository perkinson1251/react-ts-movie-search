import axios from "axios";

import configFile from "config.json";

const api = axios.create({
    baseURL: configFile.apiUrl,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

        if (!expectedError) {
            console.log(error);
        }
        return Promise.reject(error);
    }
);

const moviesService = {
    getSearchResults: async (payload: PayloadProps) => {
        const { data } = await api.get("", {
            params: {
                apikey: process.env.REACT_APP_API_KEY,
                s: payload.movieName,
            },
        });
        return data;
    },
};

export default moviesService;

interface PayloadProps {
    movieName: string;
}
