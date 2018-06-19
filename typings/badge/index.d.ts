interface Props {
    color?: string;
    tag?: string;
    pill?: boolean;
    className?: string;
}
declare const StyledBadge: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<Props, import("../theme/default").default, Pick<Props, "className" | "color" | "tag" | "pill"> & {
    theme?: import("../theme/default").default;
}>;
export default StyledBadge;
