interface Props {
    className?: string;
    title?: string;
    isActive?: boolean;
    hasActiveArrow?: boolean;
    activeArrowPosition?: number;
    name?: string;
    onChange?: Function;
    onOpenChange?: Function;
}
declare const SubMenuStyled: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<Props, import("../theme/default").default, Pick<Props, "title" | "className" | "onChange" | "name" | "isActive" | "hasActiveArrow" | "activeArrowPosition" | "onOpenChange"> & {
    theme?: import("../theme/default").default;
}>;
export default SubMenuStyled;
