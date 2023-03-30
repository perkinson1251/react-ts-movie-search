import { ChangeEvent, FormEvent, useState } from "react";

import * as S from "./styles";

import Logo from "assets/Logo.svg";

import SearchBox from "components/SearchBox/SearchBox";

const Navbar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <S.Navbar>
            <S.Box>
                <img src={Logo} alt="" />
                <SearchBox
                    placeholder="Search a movie..."
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    value={searchInput}
                />
            </S.Box>
        </S.Navbar>
    );
};

export default Navbar;
