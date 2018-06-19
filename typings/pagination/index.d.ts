import * as React from 'react';
interface Props {
    pageSize?: number;
    current?: number;
    defaultCurrent?: number;
    total?: number;
    onChange?: Function;
    className?: string;
}
interface State {
    current: number;
    currentInput: number | string;
}
declare class Pagination extends React.Component<Props, State> {
    static defaultProps: {
        onChange: () => void;
    };
    state: {
        current: number;
        currentInput: number;
    };
    static getDerivedStateFromProps(props: Props, state: State): {
        current: number;
        currentInput: React.ReactText;
    };
    handleChange: (e: any) => void;
    handleKeyUp: (e: any) => void;
    next: () => void;
    prev: () => void;
    render(): JSX.Element;
}
export default Pagination;
