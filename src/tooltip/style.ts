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
  background-color: transparent;
  animation: 0.3s ${fadeIn} ease-out;

  &[data-placement|=top] {
    padding-bottom: 8px;
  }

  &[data-placement|=right] {
    padding-left: 8px;
  }

  &[data-placement|=bottom] {
    padding-top: 8px;
  }

  &[data-placement|=left] {
    padding-right: 8px;
  }
`

export const ToolTipContent = styled.div`
  padding: 8px;
  font-size: ${T('font.size.sm')}px;
  background-color: ${T('palette.white')};
  box-shadow: 0 2px 8px ${T('palette.black16')};
`

export const ReferenceContainer = styled.div`
  display: inline-block;
`
