import * as React from 'react';
interface Props {
    onClick?: Function;
    className?: string;
}
declare class ClickOutSide extends React.Component<Props & React.HTMLAttributes<HTMLDivElement>> {
    static defaultProps: {
        onClick: () => void;
    };
    wrapper: HTMLElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClick: (e: any) => void;
    isContains(node: HTMLElement): boolean;
    render(): JSX.Element;
}
export default ClickOutSide;
