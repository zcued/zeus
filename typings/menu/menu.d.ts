import * as React from 'react';
interface Props {
    className?: string;
    hasActiveArrow?: boolean;
    activeArrowPosition?: number;
    value?: string;
    onChange?: Function;
    onOpenChange?: Function;
}
interface State {
    activeName: string;
}
export default class Menu extends React.Component<Props, State> {
    constructor(props: Props);
    onItemClick(name: string): void;
    onOpenChange(name: string): void;
    render(): JSX.Element;
}
export {};
