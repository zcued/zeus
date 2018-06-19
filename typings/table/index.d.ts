import * as React from 'react';
declare type Align = 'left' | 'right' | 'center';
interface Col {
    dataIndex: string;
    key?: string;
    render?: (text: string, record: any, index: number) => any;
    align?: Align;
    width?: string | number;
    title?: string | React.ReactNode;
}
interface Props {
    columns: Array<Col>;
    data?: Array<{
        key: string | number;
        [key: string]: any;
    }>;
    className?: string;
}
export declare const Row: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, import("../theme/default").default, React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>>;
export declare const Column: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, import("../theme/default").default, React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>>;
declare const Table: React.SFC<Props>;
export default Table;
