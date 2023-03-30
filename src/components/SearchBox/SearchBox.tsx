import * as S from "./styles";

const SearchBox = () => {
    return (
        <S.Form>
            <S.Input type="search" placeholder="Search..." />
            <S.Button type="submit">Search</S.Button>
        </S.Form>
    );
};

export default SearchBox;
