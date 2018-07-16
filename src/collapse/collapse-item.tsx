import * as React from 'react'
import styled from '../theme/styled-components'
import CollapseTransition from './collapse-transition'
import Icon from '../icon'

export interface Props {
  className?: string
  title: string | JSX.Element
  isActive?: boolean
  onClick?: any
}

const CollapseItemStyled = styled.div`
  &:last-child div {
    border-bottom: 0;
  }
`

const CollapseItemTitile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 32px;
  padding: 24px 8px;
  font-size: ${({ theme }) => theme.font.size.md}px;
  line-height: 28px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.daisy};
  cursor: pointer;

  span {
    transition: color 0.3s;
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.palette.primary};
    }
  }

  &.active {
    border-bottom: 0;
  }
`

const CollapseItemContainer = styled.div`
  padding: 40px 48px;
  background: #fafafa;
`

export default class CollapseItem extends React.Component<Props, {}> {
  render() {
    const { className, title, isActive, onClick, children } = this.props

    return (
      <CollapseItemStyled className={className}>
        <CollapseItemTitile className={isActive ? 'active' : ''} onClick={onClick}>
          <span>{title}</span>
          {isActive ? <Icon glyph="minus" size={20} /> : <Icon glyph="plus" size={20} />}
        </CollapseItemTitile>
        <CollapseTransition isShow={isActive}>
          <CollapseItemContainer>{children}</CollapseItemContainer>
        </CollapseTransition>
      </CollapseItemStyled>
    )
  }
}
