import { ITheme } from "core/types/styled";

export const WhiteTheme: ITheme = {
    colors: {
        gray400: "#9CA3AF",
        gray800: "#111827",
        rose700: "#BE123C",
        navbarColor: "rgba(0, 0, 0, 0.8)",
        opacity: ".8",
    },
    media: {
        extraLarge: "(max-width: 1140px)",
        large: "(max-width: 960px)",
        medium: "(max-width: 720px)",
        small: "(max-width: 540px)",
    },
    //! 1 rem - 10px (if htmlFontSize = 62.5%)
    sizes: {
        htmlFontSize: "62.5%",
        filmCard: { width: "25rem" },
        containerWidth: "125rem",
    },
    durations: {
        ms500: 500,
    },
};
