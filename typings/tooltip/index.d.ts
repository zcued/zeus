import * as React from 'react';
interface Props {
    placement: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    title: JSX.Element;
    className?: string;
}
interface State {
    isHovering: boolean;
}
declare class Tooltip extends React.Component<Props, State> {
    state: {
        isHovering: boolean;
    };
    timer: any;
    handleEnter: () => void;
    handleLeave: () => void;
    render(): JSX.Element;
}
export default Tooltip;
