/// <reference types="react" />
export interface Props {
    type?: 'warning' | 'success' | 'info' | 'error';
    showIcon?: boolean;
    iconSize?: number;
    title?: string | JSX.Element;
}
declare const StyledAlert: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<Props, import("../theme/default").default, Pick<Props, "title" | "type" | "showIcon" | "iconSize"> & {
    theme?: import("../theme/default").default;
}>;
export default StyledAlert;
