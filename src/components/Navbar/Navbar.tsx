import { Link } from "react-router-dom";

import * as S from "./styles";

import Logo from "assets/Logo.svg";
import { TextLG } from "styles/components";

const Navbar = () => {
    return (
        <S.Navbar>
            <S.Box>
                <S.Logo src={Logo} alt="Logotype" />
                <S.Links>
                    <Link to="/">
                        <TextLG>Home</TextLG>
                    </Link>
                    <S.Link href="https://github.com/perkinson1251" target="_blank">
                        <TextLG>GitHub account</TextLG>
                    </S.Link>
                    <S.Link href="https://github.com/perkinson1251/react-ts-movie-search" target="_blank">
                        <TextLG>Repo</TextLG>
                    </S.Link>
                </S.Links>
            </S.Box>
        </S.Navbar>
    );
};

export default Navbar;
