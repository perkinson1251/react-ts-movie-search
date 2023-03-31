export enum ThemeEnum {
    light = "light",
    dark = "dark",
}

export interface ITheme {
    colors: {
        gray400: string;
        gray800: string;
        rose700: string;
        textColor: string;
        navbarColor: string;
        backgroundColor: string;
        backgroundImage: string;
        opacity: string;
        collapsibleButtonColor: string;
        collapsibleButtonColorHover: string;
        collapsibleContentColor: string;
    };
    media: {
        extraLarge: string;
        large: string;
        medium: string;
        small: string;
    };
    sizes: {
        htmlFontSize: string;
        mainFontSize: string;
        filmCard: { width: string };
        containerWidth: string;
        borderRadius: string;
        cardRowGap: string;
    };
    durations: {
        ms500: number;
    };
}
