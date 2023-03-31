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
        <form onSubmit={onSubmit}>
            <S.Container>
                <S.Input type="text" placeholder={placeholder} onChange={onChange} value={value} />
                <S.Button type="submit">Search</S.Button>
            </S.Container>
        </form>
    );
};

export default SearchBox;
