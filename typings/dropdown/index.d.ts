import * as React from 'react';
interface Props {
    trigger?: 'hover' | 'click';
    text?: string;
    className?: string;
    icon?: string;
    iconSize?: number;
    isOpen?: boolean;
    onToggle?: Function;
}
declare class Dropdown extends React.Component<Props> {
    static defaultProps: {
        trigger: string;
        icon: string;
        iconSize: number;
        onToggle: () => void;
    };
    state: {
        isOpen: boolean;
    };
    isControl: boolean;
    static getDerivedStateFromProps(nextProps: Props): {
        isOpen: boolean;
    };
    handleClick: (e: any) => void;
    handleHover: (e: any) => void;
    handleClickOutSide: () => void;
    toggle: (e: any) => void;
    render(): JSX.Element;
}
export default Dropdown;
