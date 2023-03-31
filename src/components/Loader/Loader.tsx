import * as S from "./styles";

const Loader = () => {
    return (
        <S.Background>
            <S.MainLoader>
                <S.MainLoaderComponent></S.MainLoaderComponent>
                <S.MainLoaderComponent></S.MainLoaderComponent>
                <S.MainLoaderComponent></S.MainLoaderComponent>
                <S.MainLoaderComponent></S.MainLoaderComponent>
            </S.MainLoader>
        </S.Background>
    );
};

export default Loader;
