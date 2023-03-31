import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";

import moviesService from "core/services/movies.service";
import { SearchResponse } from "core/types/response";

import * as S from "./styled";
import "react-toastify/dist/ReactToastify.css";

import SearchBox from "components/SearchBox/SearchBox";
import Navbar from "components/Navbar/Navbar";
import MovieList from "components/MovieList/MovieList";

const Mainpage = () => {
    const [movies, setMovies] = useState<SearchResponse[]>([]);
    const [searchInput, setSearchInput] = useState("");
    const [errors, setErrors] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const req = async () => {
            const res = await moviesService.getSearchResults({ movieName: searchInput });
            if (res.Search === undefined) {
                setMovies([]);
                return toast.error(res.Error);
            } else {
                setErrors("");
                return setMovies(res.Search);
            }
        };
        req();
    };

    return (
        <S.Page>
            <Navbar />
            <S.Title>
                Search information <br /> about movies in one click!
            </S.Title>
            <SearchBox
                onChange={handleChange}
                onSubmit={handleSubmit}
                placeholder="Search your movie..."
                value={searchInput}
            />
            {errors !== "" ? errors : <MovieList title="Search results" movies={movies.slice(0, 5)} />}
        </S.Page>
    );
};

export default Mainpage;
