import * as React from 'react';
interface Props {
    title?: JSX.Element | string;
    footer?: JSX.Element | string;
    closeStyle?: object;
    width: number;
    height: number;
    style?: ModalStyle;
    ariaHideApp?: boolean;
    isOpen: boolean;
    portalClassName?: string;
    bodyOpenClassName?: string;
    htmlOpenClassName?: string;
    className?: string | {
        base: string;
        afterOpen: string;
        beforeClose: string;
    };
    overlayClassName?: string | {
        base: string;
        afterOpen: string;
        beforeClose: string;
    };
    appElement?: HTMLElement;
    onAfterOpen?: Function;
    onRequestClose?: Function;
    closeTimeoutMS?: number;
    shouldFocusAfterRender?: boolean;
    shouldCloseOnOverlayClick?: boolean;
    shouldReturnFocusAfterClose?: boolean;
    parentSelector?: Function;
    aria?: object;
    role?: string;
    contentLabel?: string;
    shouldCloseOnEsc?: boolean;
    overlayRef?: Function;
    contentRef?: Function;
}
interface ModalStyle {
    content: {
        [key: string]: any;
    };
    overlay: {
        [key: string]: any;
    };
}
declare class Modal extends React.Component<Props> {
    static defaultProps: {
        ariaHideApp: boolean;
    };
    MODAL_STYLES: ModalStyle;
    syncStyle(style: ModalStyle): ModalStyle;
    render(): JSX.Element;
}
export default Modal;
