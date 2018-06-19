import * as React from 'react';
export declare const FormContext: React.Context<{}>;
interface Props {
    width?: number | string;
    className?: string;
    style?: object;
}
interface ControlProps {
    error?: boolean;
    disabled?: boolean;
    style?: object;
    className?: string;
}
export declare const Form: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<Props, import("../theme/default").default, Pick<Props, "style" | "className" | "width"> & {
    theme?: import("../theme/default").default;
}>;
export declare const FormControl: React.SFC<ControlProps>;
export declare const FormLabel: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, import("../theme/default").default, React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>>;
export declare const FormHelperText: ({ children }: {
    children: any;
}) => JSX.Element;
export {};
