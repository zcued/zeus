import * as React from 'react'
import styled, { css } from '../theme/styled-components'
import { T } from '../util'

interface Props {
  className?: string
  isActive?: boolean
  hasActiveArrow?: boolean
  activeArrowPosition?: number
  align?: string
  name?: string
  onClick?: Function
}

export const MenuItemContainer = styled.li`
  position: relative;
  padding: 16px 32px 16px 40px;
  cursor: pointer;
  transition: all 0.3s;

  > span {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      height: 4px;
      background: ${T('palette.primary')};
      opacity: 0;
      transition: opacity 0.3s;
    }
  }

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
    font-weight: ${T('font.weight.bold')};

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
  }

  &:hover {
    color: ${T('palette.primary')};

    &.active {
      color: ${T('palette.black')};
    }
  }
`

const MenuItem: React.SFC<Props> = ({ className, isActive, name, onClick, children }) => (
  <MenuItemContainer
    data-menu-item={true}
    className={className + (isActive ? ' active' : '')}
    onClick={() => onClick(name)}
  >
    <span>{children}</span>
  </MenuItemContainer>
)

const MenuItemStyled = styled(MenuItem)`
  &.active {
    &::before {
      display: ${({ hasActiveArrow }) => (hasActiveArrow ? 'block' : 'none')};
      right: -${({ activeArrowPosition }) => (activeArrowPosition ? activeArrowPosition : 40)}px;
    }

    ${props =>
      props.align === 'left'
        ? css`
            > span::after {
              width: 100%;
              opacity: 1;
            }

            &::after {
              opacity: 0;
            }
          `
        : css`
            > span::after {
              width: ;
              opacity: 1;
            }

            &::after {
              opacity: 1;
            }
          `};
  }
`
export default MenuItemStyled
