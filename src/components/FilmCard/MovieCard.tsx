import { Link } from "react-router-dom";

import { DarkTheme } from "styles/theme";
import * as S from "./styles";
import { TextLG, TextXS } from "styles/components";

interface FilmCardProps {
    poster: string;
    year: string;
    filmName: string;
    imdbID: string;
}

const FilmCard = ({ poster, year, filmName, imdbID }: FilmCardProps) => {
    return (
        <Link to={imdbID}>
            <S.CardContainer>
                <S.Image src={poster} alt="Poster" />
                <TextXS color={DarkTheme.colors.gray400}>{year}</TextXS>
                <TextLG>{filmName}</TextLG>
            </S.CardContainer>
        </Link>
    );
};

export default FilmCard;
