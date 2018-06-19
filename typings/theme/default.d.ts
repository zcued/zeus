export interface Size {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
export interface LineHeight {
    sm: number;
    md: number;
    lg: number;
}
export default interface ThemeInterface {
    breakpoints: Size;
    palette: {
        primary: string;
        secondary: string;
        white: string;
        black: string;
        spruce: string;
        stone: string;
        frost: string;
        daisy: string;
        black16: string;
        black30: string;
    };
    spacing: Size;
    font: {
        family: string;
        weight: {
            normal: number;
            medium: number;
            bold: number;
        };
        size: Size;
        lineHeight: LineHeight;
    };
    misc: {
        radius: number;
        animationDuration: string;
        inputs: {
            padding: number;
        };
        avatar: {
            sm: number;
            md: number;
            lg: number;
        };
    };
}
export declare const theme: ThemeInterface;
