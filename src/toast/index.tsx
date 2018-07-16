import * as React from 'react'
import styled from '../theme/styled-components'
import { zIndex } from '../globals'
import { T } from '../util'

interface Props {
  children: any
}

export const Toast: any = styled.div`
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
  transform: translateX(-50%) translateY(calc(-50% - 100px));
`

export default Toast
