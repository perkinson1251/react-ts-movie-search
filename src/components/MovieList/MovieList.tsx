import React from "react";

import { SearchResponse } from "core/types/response";

import * as S from "./styles";
import FilmCard from "components/FilmCard/MovieCard";
import { Text4XL } from "styles/components";

interface MovieListProps {
    title: string;
    movies: Array<SearchResponse>;
}

const MovieList = ({ title, movies }: MovieListProps) => {
    return (
        <>
            <Text4XL bold>{title}</Text4XL>
            <S.Row>
                {movies.map((movie: SearchResponse, index) => (
                    <FilmCard
                        key={index}
                        poster={movie.Poster}
                        year={movie.Year}
                        filmName={movie.Title}
                        imdbID={movie.imdbID}
                    />
                ))}
            </S.Row>
        </>
    );
};

export default MovieList;
