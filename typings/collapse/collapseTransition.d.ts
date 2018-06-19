import * as React from 'react';
interface Props {
    isShow: boolean;
}
export default class CollapseTransition extends React.Component<Props> {
    selfRef: any;
    leaveTimer: any;
    enterTimer: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any): void;
    triggerChange(isShow: boolean): void;
    beforeEnter(): void;
    enter(): void;
    afterEnter(): void;
    beforeLeave(): void;
    leave(): void;
    afterLeave(): void;
    render(): JSX.Element;
}
export {};
