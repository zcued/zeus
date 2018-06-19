/// <reference types="react" />
interface TagProps {
    type?: 'hot' | 'default';
    color?: string;
    dotcolor?: string;
    checked?: boolean;
    children?: any;
    className?: string;
}
declare const _default: ({ className, children, type, checked, dotcolor, ...rest }: TagProps) => JSX.Element;
export default _default;
