import * as React from 'react'
import * as ReactModal from 'react-modal'
import Icon from '../icon'
import { zIndex } from '../globals'
import styled from '../theme/styled-components'
import Flex from '../flex'
import { T } from '../util'

export interface Props {
  title?: JSX.Element | string
  footer?: JSX.Element | Array<JSX.Element> | string
  closeStyle?: object
  width?: number
  height?: number
  style?: ModalStyle
  ariaHideApp?: boolean
  isOpen: boolean
  portalClassName?: string
  bodyOpenClassName?: string
  htmlOpenClassName?: string
  className?:
    | string
    | {
        base: string
        afterOpen: string
        beforeClose: string
      }
  overlayClassName?:
    | string
    | {
        base: string
        afterOpen: string
        beforeClose: string
      }
  appElement?: HTMLElement
  onAfterOpen?: Function
  onRequestClose?: Function
  closeTimeoutMS?: number
  shouldFocusAfterRender?: boolean
  shouldCloseOnOverlayClick?: boolean
  shouldReturnFocusAfterClose?: boolean
  parentSelector?: Function
  aria?: object
  role?: string
  contentLabel?: string
  shouldCloseOnEsc?: boolean
  overlayRef?: Function
  contentRef?: Function
}

export interface ModalStyle {
  content: {
    [key: string]: any
  }
  overlay: {
    [key: string]: any
  }
}

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: -56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ color, theme }) => color || theme.palette.white};
`

export const ModalContainer = styled.div`
  text-align: center;
  max-height: 90vh;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
`

export const Header = styled.div`
  margin-top: ${T('spacing.lg')}px;
  margin-bottom: ${T('spacing.lg')}px;
  font-weight: ${T('font.weight.bold')};
  font-size: ${T('font.size.md')}px;
  color: ${T('palette.black')};
  line-height: 28px;
`

export const Body = styled(Flex)`
  height: auto;
`

export const Footer = styled(Flex)`
  margin-top: ${T('spacing.lg')}px;
  margin-bottom: ${T('spacing.lg')}px;

  & > button {
    width: 128px;
    padding: 0;

    & + button {
      margin-left: ${T('spacing.md')}px;
    }
  }
`

class Modal extends React.Component<Props> {
  static defaultProps = {
    ariaHideApp: false
  }

  MODAL_STYLES: ModalStyle = {
    content: {
      width: 528,
      height: '100%',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: 'auto',
      border: 'none',
      padding: 0,
      borderRadius: 0,
      overflow: 'visible'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: zIndex.modal
    }
  }

  syncStyle(style: ModalStyle) {
    const { width, height } = this.props

    if (style) {
      if (style.content) {
        Object.assign(this.MODAL_STYLES.content, style.content)
      }
      if (style.overlay) {
        Object.assign(this.MODAL_STYLES.overlay, style.overlay)
      }
    }

    if (width) {
      this.MODAL_STYLES.content.width = width
    }

    if (height) {
      this.MODAL_STYLES.content.height = height
    }

    return this.MODAL_STYLES
  }

  render() {
    const {
      width,
      height,
      closeStyle,
      title,
      footer,
      children,
      ariaHideApp,
      onRequestClose,
      shouldCloseOnOverlayClick = false,
      style,
      ...rest
    } = this.props

    return (
      <ReactModal
        ariaHideApp={ariaHideApp}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        style={this.syncStyle(style)}
        {...rest}
      >
        <ModalContainer>
          <CloseButton onClick={onRequestClose as any} style={closeStyle}>
            <Icon glyph="close" size={14} />
          </CloseButton>
          {title ? <Header>{title}</Header> : null}
          <Body direction="column" halign="center">
            {children}
          </Body>
          {footer ? <Footer halign="center">{footer}</Footer> : null}
        </ModalContainer>
      </ReactModal>
    )
  }
}

export default Modal
