interface Props {
    className?: string;
    isActive?: boolean;
    hasActiveArrow?: boolean;
    activeArrowPosition?: number;
    name?: string;
    onClick?: Function;
}
declare const MenuItemStyled: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<Props, import("../theme/default").default, Pick<Props, "className" | "onClick" | "name" | "isActive" | "hasActiveArrow" | "activeArrowPosition"> & {
    theme?: import("../theme/default").default;
}>;
export default MenuItemStyled;
