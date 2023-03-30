import { WhiteTheme } from "styles/theme";
import * as S from "./styles";
import { TextLG, TextXS } from "styles/components";

interface FilmCardProps {
    poster: string;
    year: string;
    filmName: string;
}

const FilmCard = ({ poster, year, filmName }: FilmCardProps) => {
    return (
        <S.CardContainer>
            <S.Image src={poster} alt="Poster" />
            <TextXS color={WhiteTheme.colors.gray400}>{year}</TextXS>
            <TextLG>{filmName}</TextLG>
        </S.CardContainer>
    );
};

export default FilmCard;
