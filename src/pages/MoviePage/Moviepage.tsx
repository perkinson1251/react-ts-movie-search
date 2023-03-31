import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import moviesService from "core/services/movies.service";
import { MovieSearchResponse } from "core/types/response";
import { TableContentProps } from "core/types/table";

import * as S from "./styled";
import { Text4XL, TextBase, TextXL } from "styles/components";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "components/Navbar/Navbar";
import Collapsible from "components/Collapsible/Collapsible ";
import Table from "components/Table/Table";
import Loader from "components/Loader/Loader";

const Moviepage = () => {
    const [movie, setMovie] = useState<MovieSearchResponse>();
    const [loading, setLoading] = useState(true);

    const { imdbID } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let res: MovieSearchResponse = await moviesService.getMovieInfo({
                id: typeof imdbID === "string" ? imdbID : "",
            });
            if (res === undefined) {
                setLoading(true);
                return toast.error("Something han happaned");
            } else {
                setLoading(false);
                return setMovie(res);
            }
        };
        fetchData();
    }, [imdbID]);

    const movieTypes = {
        movie: "Movie",
        series: "Series",
        episode: "Episode",
    };

    const mainInformation: TableContentProps[] = [
        {
            title: "Director",
            value: movie?.Director || "N/A",
        },
        {
            title: "Writer",
            value: movie?.Writer || "N/A",
        },
        {
            title: "Actors",
            value: movie?.Actors || "N/A",
        },
        {
            title: "Laungage",
            value: movie?.Language || "N/A",
        },
        {
            title: "Type",
            value: movie?.Type !== undefined ? movieTypes[movie?.Type] : "N/A",
        },
        {
            title: "Release year",
            value: movie?.Released || "N/A",
        },
        {
            title: "Genres",
            value: movie?.Genre || "N/A",
        },
        {
            title: "Runtime",
            value: movie?.Runtime || "N/A",
        },
    ];

    const secondaryInformation: TableContentProps[] = [
        {
            title: "Rated",
            value: movie?.Rated || "N/A",
        },
        {
            title: "Awards",
            value: movie?.Awards || "N/A",
        },
        {
            title: "Metascore",
            value: movie?.Metascore || "N/A",
        },
        {
            title: "imdbRating",
            value: movie?.imdbRating || "N/A",
        },
        {
            title: "imdbVotes",
            value: movie?.imdbVotes || "N/A",
        },
        {
            title: "DVD",
            value: movie?.DVD || "N/A",
        },
    ];

    return (
        <>
            {loading === false ? (
                <>
                    <Navbar />
                    <S.MainContainer>
                        <img src={movie?.Poster} alt="Poster" />
                        <S.MainContent>
                            <Text4XL>{movie?.Title}</Text4XL>
                            <TextXL>Storyline</TextXL>
                            <TextBase>{movie?.Plot}</TextBase>
                            <Table content={mainInformation} />
                            <Collapsible title="More information">
                                <Table content={secondaryInformation} />
                            </Collapsible>
                        </S.MainContent>
                    </S.MainContainer>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Moviepage;
