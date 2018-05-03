import * as React from 'react'
import styled from '../theme/styled-components'
import CollapseTransition from './collapseTransition'

const CollapseItemStyled = styled.div`
  &:last-child div {
    border-bottom: 0;
  }
`

const CollapseItemTitile = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 32px;
  padding: 24px 8px;
  font-size: ${({ theme }) => theme.font.size.md}px;
  line-height: 28px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.daisy};
  cursor: pointer;

  &.active {
    border-bottom: 0;
  }
`

const CollapseItemContainer = styled.div`
  padding: 40px 48px;
  background: #fafafa;
`

interface Props {
  className?: string
  title: string | JSX.Element
  isActive?: boolean
  onClick?: any
  icon?: Function
}

export default class CollapseItem extends React.Component<Props, {}> {
  render() {
    const { className, title, isActive, onClick, icon, children } = this.props

    return (
      <CollapseItemStyled className={className}>
        <CollapseItemTitile className={isActive ? 'active' : ''} onClick={onClick}>
          {title}
          {icon ? icon(isActive) : null}
        </CollapseItemTitile>
        <CollapseTransition isShow={isActive}>
          <CollapseItemContainer>{children}</CollapseItemContainer>
        </CollapseTransition>
      </CollapseItemStyled>
    )
  }
}
