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
  color: ${T('palette.white')};
  background-color: ${T('palette.black30')};
  padding: 4px 8px;
  animation: 0.3s ${fadeIn} ease-out;
`

export const ReferenceContainer = styled.div`
  display: inline-block;
`
