export enum ThemeEnum {
    light = "light",
    dark = "dark",
}

export interface ITheme {
    colors: {
        gray400: string;
        gray800: string;

        rose700: string;

        navbarColor: string;

        opacity: string;
    };
    media: {
        extraLarge: string;
        large: string;
        medium: string;
        small: string;
    };
    sizes: {
        htmlFontSize: string;
        filmCard: { width: string };
        containerWidth: string;
    };
    durations: {
        ms500: number;
    };
}
