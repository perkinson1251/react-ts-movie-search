import { ChangeEvent, FormEvent } from "react";

import * as S from "./styles";

interface SearchBoxProps {
    placeholder: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const SearchBox = ({ placeholder, onSubmit, onChange, value }: SearchBoxProps) => {
    return (
        <S.Form onSubmit={onSubmit}>
            <S.Input type="search" placeholder={placeholder} onChange={onChange} value={value} />
            <S.Button type="submit">Search</S.Button>
        </S.Form>
    );
};

export default SearchBox;
