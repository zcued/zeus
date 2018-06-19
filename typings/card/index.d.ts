/// <reference types="react" />
interface CardPorps {
    type?: 'card' | 'atlas' | 'picture';
    size?: 'small';
    imgSrc?: string;
    imgAlt?: string;
    imgHeight?: number;
    titlePosition?: 'bottom';
    title?: string;
    subTitle?: string;
    tag?: JSX.Element;
    operator?: JSX.Element;
    borderStyle?: string;
    customImage?: JSX.Element;
    customContent?: JSX.Element;
    className?: string;
}
declare const CardStyled: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<CardPorps, import("../theme/default").default, Pick<CardPorps, "title" | "className" | "size" | "type" | "operator" | "tag" | "imgSrc" | "imgAlt" | "imgHeight" | "titlePosition" | "subTitle" | "borderStyle" | "customImage" | "customContent"> & {
    theme?: import("../theme/default").default;
}>;
export default CardStyled;
