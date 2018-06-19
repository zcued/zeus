/// <reference types="react" />
interface Props {
    type?: 'primary' | 'ghost';
    loading?: boolean;
    disabled?: boolean;
    icon?: string;
    iconSize?: number;
    size?: 'sm' | 'md';
    children?: any;
}
declare const _default: ({ children, size, icon, iconSize, disabled, loading, ...rest }: Props) => JSX.Element;
export default _default;
