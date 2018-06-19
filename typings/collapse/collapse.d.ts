import * as React from 'react';
interface Props {
    value?: string | Array<string>;
    accordion?: boolean;
    className?: string;
    onChange?: any;
}
export default class Collapse extends React.Component<Props> {
    state: {
        activeKey: any;
    };
    componentWillReceiveProps(nextProps: Props): void;
    onItemClick(key: string): void;
    render(): JSX.Element;
}
export {};
