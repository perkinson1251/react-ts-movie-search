import * as S from "./styles";

import Logo from "assets/Logo.svg";

import SearchBox from "components/SearchBox/SearchBox";

const Navbar = () => {
    return (
        <S.Navbar>
            <S.Box>
                <img src={Logo} alt="" />
                <SearchBox></SearchBox>
            </S.Box>
        </S.Navbar>
    );
};

export default Navbar;
