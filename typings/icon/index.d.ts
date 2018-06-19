import * as React from 'react';
interface Props {
    glyph: string;
    size?: number;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const Glyph: ({ glyph }: {
    glyph: any;
}) => JSX.Element;
export declare const InlineSvg: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<React.SVGProps<SVGSVGElement>, import("../theme/default").default, React.SVGProps<SVGSVGElement>>;
declare const Icon: React.SFC<Props>;
export default Icon;
