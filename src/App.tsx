import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { WhiteTheme } from "styles/theme";
import GlobalStyles from "styles/global";
import MovieList from "components/MovieList/MovieList";

import { SearchResponse } from "core/types/response";
import moviesService from "core/services/movies.service";
import Navbar from "components/Navbar/Navbar";

const App = () => {
    const [movies, setMovies] = useState<SearchResponse[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { Search } = await moviesService.getSearchResults({ movieName: "Star" });
            setMovies(Search);
        };
        fetchData();
    }, []);

    return (
        <ThemeProvider theme={WhiteTheme}>
            <Navbar />
            <MovieList movies={movies} />
            <MovieList movies={movies} />
            <MovieList movies={movies} />
            <MovieList movies={movies} />
            <MovieList movies={movies} />
            <MovieList movies={movies} />
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
