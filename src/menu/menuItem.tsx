import * as React from 'react'
import styled from 'styled-components'

const MenuItemStyled = styled.div`
  position: relative;
  padding: 16px;
  cursor: pointer;
  transition: all .3s;

  &.active {
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: -40px;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-top-width: 16px;
      border-bottom-width: 16px;
      border-right-color:  ${({theme}) => theme.palette.white};
      transform: translateY(-50%);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 50%;
      width: 40px;
      height: 4px;
      background: ${({theme}) => theme.palette.primary};
      transform: translateX(-50%);
    }
  }

  &:hover {
    color: ${({theme}) => theme.palette.primary};

    &.active {
      color: ${({theme}) => theme.palette.black};
    }
  }
`

interface Props {
  className?: string
  isActive?: boolean
  name?: string
  onClick?: any
}

export default class MenuItem extends React.Component<Props, {}> {
  render() {
    const { className, isActive, name, onClick, children } = this.props

    return (
      <MenuItemStyled className={className + (isActive ? ' active' : '')} onClick={() => onClick(name)}>
        {children}
      </MenuItemStyled>
    )
  }
}
