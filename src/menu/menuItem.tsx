import * as React from 'react'
import styled from '../theme/styled-components'
import { MenuItemContainer } from './style'

interface Props {
  className?: string
  isActive?: boolean
  hasActiveArrow?: boolean
  activeArrowPosition?: number
  name?: string
  onClick?: Function
}

const MenuItem: React.SFC<Props> = ({ className, isActive, name, onClick, children }) => (
  <MenuItemContainer className={className + (isActive ? ' active' : '')} onClick={() => onClick(name)}>
    {children}
  </MenuItemContainer>
)

const MenuItemStyled = styled(MenuItem)`
  &.active {
    &::before {
      display: ${({ hasActiveArrow }) => hasActiveArrow ? 'block' : 'none'};
      right: -${({ activeArrowPosition }) => activeArrowPosition ? activeArrowPosition : 40}px;
    }
  }
`

export default MenuItemStyled
