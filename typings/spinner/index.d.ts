interface Props {
    size?: number;
    inline?: boolean;
    color?: string;
}
declare const StyledSpinner: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<Props, import("../theme/default").default, Pick<Props, "color" | "size" | "inline"> & {
    theme?: import("../theme/default").default;
}>;
export default StyledSpinner;
