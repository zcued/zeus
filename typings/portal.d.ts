import * as React from 'react';
interface Props {
    container?: object | Function;
    onRendered?: () => void;
}
declare class Portal extends React.Component<Props> {
    mountNode: HTMLElement;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    setContainer(container: object | Function): void;
    getMountNode: () => HTMLElement;
    render(): any;
}
export default Portal;
