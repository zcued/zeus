import styled, { keyframes } from 'styled-components'
import ClickOutSide from './click-outside'
import { zIndex } from '../globals'
import { T } from '../util'

export const StyledClickOutSide = styled(ClickOutSide)`
  display: inline-block;
  background-color: transparent;
  position: relative;
  padding: ${T('spacing.xs')}px;
  color: ${T('palette.black')};
`

export const Button = styled.button`
  border: none;
  outline: none;
  padding: ${T('spacing.xs')}px;
`

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const DropdownContainer = styled.div`
  background: transparent;
`

export const PoppersContainer = styled.div`
  opacity: 0;
  position: absolute;
  animation: ${fadeIn} 0.1s ease-in 0.1s forwards;
  z-index: ${zIndex.dropdown};
  box-shadow: 0 6px 12px ${T('palette.black16')};
  border-radius: 4px;
  padding: ${T('spacing.xs')}px;
`
