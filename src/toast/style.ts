import styled from '../theme/styled-components'
import { zIndex } from '../globals'
import { T } from '../util'

export const Toast = styled.div`
  position: fixed;
  box-sizing: border-box;
  text-align: center;
  top: 48px;
  right: 0;
  left: 0;
  margin: auto;
  min-width: 288px;
  max-width: 568px;
  height: 48px;
  line-height: 48px;
  font-size: ${T('font.size.md')}px;
  font-weight: ${T('font.weight.bold')};
  background: ${T('palette.white')};
  color: ${T('palette.black')};
  box-shadow: 0 4px 16px 0 ${T('palette.black16')};
  pointer-events: none;
  z-index: ${zIndex.toast};
`
