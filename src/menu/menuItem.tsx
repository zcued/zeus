import * as React from 'react'
import styled from '../theme/styled-components'

const MenuItemStyled = styled.div`
  position: relative;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &.active {
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: -40px;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-top-width: 14px;
      border-bottom-width: 14px;
      border-right-color: ${({ theme }) => theme.palette.white};
      transform: translateY(-50%);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 50%;
      width: 40px;
      height: 4px;
      background: ${({ theme }) => theme.palette.primary};
      transform: translateX(-50%);
    }
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary};

    &.active {
      color: ${({ theme }) => theme.palette.black};
    }
  }
`

interface Props {
  className?: string
  isActive?: boolean
  name?: string
  onClick?: any
}

const MenuItem: React.SFC<Props> = ({ className, isActive, name, onClick, children }) => (
  <MenuItemStyled className={className + (isActive ? ' active' : '')} onClick={() => onClick(name)}>
    {children}
  </MenuItemStyled>
)

export default MenuItem
