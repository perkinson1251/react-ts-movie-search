import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import { DarkTheme } from "styles/theme";
import GlobalStyles from "styles/global";
import "react-toastify/dist/ReactToastify.css";

import Mainpage from "pages/Mainpage/Mainpage";
import Moviepage from "pages/MoviePage/Moviepage";

const App = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Routes>
                <Route path="/" element={<Mainpage />}></Route>
                <Route path="/:imdbID" element={<Moviepage />}></Route>
            </Routes>
            <ToastContainer theme="dark" style={{ fontSize: "1.5rem" }} />
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
