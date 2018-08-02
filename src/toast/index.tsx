import * as React from 'react'
import styled from '../theme/styled-components'
import { zIndex } from '../globals'
import { T } from '../util'

interface Props {
  offsetTop?: number
  offsetLeft?: number
}

const Toast: React.SFC<Props> = ({ children, ...rest }) => <div {...rest}>{children}</div>

const ToastStyled: any = styled(Toast)`
  position: fixed;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  margin: auto;
  padding: 10px 40px;
  max-width: 528px;
  font-size: ${T('font.size.md')}px;
  font-weight: ${T('font.weight.bold')};
  color: ${T('palette.black')};
  line-height: 28px;
  text-align: center;
  background: ${T('palette.white')};
  box-shadow: 0 4px 16px 0 ${T('palette.black16')};
  pointer-events: none;
  z-index: ${zIndex.toast};
  overflow: hidden;
  transform: translateX(calc(-50% - ${({ offsetLeft }) => offsetLeft || 0}px))
    translateY(calc(-50% - 100px - ${({ offsetTop }) => offsetTop || 0}px));
`

export default ToastStyled
