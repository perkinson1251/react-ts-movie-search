import { ITheme } from "core/types/styled";

export const DarkTheme: ITheme = {
    colors: {
        gray400: "#9CA3AF",
        gray800: "#111827",
        rose700: "#BE123C",

        textColor: "#FFFFFF",

        navbarColor: "rgba(0, 0, 0, 0.8)",
        opacity: ".8",

        backgroundColor: "hsla(120,0%,9%,1)",
        backgroundImage:
            "radial-gradient(at 39% 27%, hsla(59,8%,9%,1) 0px, transparent 50%), radial-gradient(at 83% 8%, hsla(220,8%,9%,1) 0px, transparent 50%), radial-gradient(at 4% 53%, hsla(26,8%,9%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(11,8%,9%,1) 0px, transparent 50%), radial-gradient(at 7% 94%, hsla(53,8%,9%,1) 0px, transparent 50%), radial-gradient(at 82% 87%, hsla(273,8%,9%,1) 0px, transparent 50%), radial-gradient(at 3% 6%, hsla(14,8%,9%,1) 0px, transparent 50%);",

        collapsibleButtonColor: "#191919",
        collapsibleButtonColorHover: "#222",
        collapsibleContentColor: "#111",
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
        mainFontSize: "1.6rem",
        filmCard: { width: "25rem" },
        containerWidth: "125rem",
        borderRadius: "1rem",
        cardRowGap: "3rem",
    },
    durations: {
        ms500: 500,
    },
};
