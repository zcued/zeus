interface Props {
    basis?: string;
    direction?: string;
    grow?: number;
    halign?: string;
    shrink?: number;
    type?: string;
    valign?: string;
    className?: string;
}
declare const StyledFlex: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<Props, import("../theme/default").default, Pick<Props, "className" | "type" | "direction" | "grow" | "basis" | "halign" | "shrink" | "valign"> & {
    theme?: import("../theme/default").default;
}>;
export default StyledFlex;
