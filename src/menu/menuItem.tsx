import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'

interface Props {
  className?: string
  isActive?: boolean
  hasActiveArrow?: boolean
  activeArrowPosition?: number
  name?: string
  onClick?: Function
}

export const MenuItemContainer = styled.li`
  position: relative;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 40px;
    height: 4px;
    background: ${T('palette.primary')};
    opacity: 0;
    transform: translateX(-50%);
    transition: opacity 0.3s;
  }

  &.active {
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-top-width: 14px;
      border-bottom-width: 14px;
      border-right-color: ${T('palette.white')};
      transform: translateY(-50%);
    }

    &::after {
      opacity: 1;
    }
  }

  &:hover {
    color: ${T('palette.primary')};

    &.active {
      color: ${T('palette.black')};
    }
  }
`

const MenuItem: React.SFC<Props> = ({ className, isActive, name, onClick, children }) => (
  <MenuItemContainer className={className + (isActive ? ' active' : '')} onClick={() => onClick(name)}>
    {children}
  </MenuItemContainer>
)

const MenuItemStyled = styled(MenuItem)`
  &.active {
    &::before {
      display: ${({ hasActiveArrow }) => (hasActiveArrow ? 'block' : 'none')};
      right: -${({ activeArrowPosition }) => (activeArrowPosition ? activeArrowPosition : 40)}px;
    }
  }
`
export default MenuItemStyled
