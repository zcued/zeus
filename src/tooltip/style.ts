import styled, { keyframes } from '../theme/styled-components'
import { T } from '../util'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ToolTipContainer = styled.div`
  padding: 8px;
  font-size: ${T('font.size.sm')}px;
  background-color: ${T('palette.white')};
  box-shadow: 0 2px 8px ${T('palette.black16')};
  animation: 0.3s ${fadeIn} ease-out;
`

export const ReferenceContainer = styled.div`
  display: inline-block;
`
