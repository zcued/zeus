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
  display: inline-block;
`

export const PopperContainer = styled.div`
  padding: ${T('spacing.xs')}px;
  font-size: ${T('font.size.sm')}px;
  background-color: ${T('palette.white')};
  box-shadow: 0 2px 8px ${T('palette.black16')};
  animation: 0.3s ${fadeIn} ease-out;

  &[data-placement|='top'] {
    margin-bottom: 8px;
  }

  &[data-placement|='right'] {
    margin-left: 8px;
  }

  &[data-placement|='bottom'] {
    margin-top: 8px;
  }

  &[data-placement|='left'] {
    margin-right: 8px;
  }
`

export const ReferenceContainer = styled.div`
  display: inline-block;
  font-size: ${T('font.size.sm')}px;
`
