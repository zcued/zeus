import * as React from 'react';
export declare const StyledTabs: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme/default").default, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
interface TabProps {
    selected?: boolean;
}
export declare const StyledTab: import("../../node_modules/styled-components/typings/styled-components").StyledComponentClass<TabProps, import("../theme/default").default, Pick<TabProps, "selected"> & {
    theme?: import("../theme/default").default;
}>;
export {};
