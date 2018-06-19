import * as React from 'react';
interface Props {
    className?: string;
    title: string | JSX.Element;
    isActive?: boolean;
    onClick?: any;
}
export default class CollapseItem extends React.Component<Props, {}> {
    render(): JSX.Element;
}
export {};
