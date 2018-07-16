import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'
import Icon from '../icon'
import CollapseTransition from '../collapse/collapse-transition'

interface Props {
  className?: string
  title?: string
  isActive?: boolean
  isOpen?: boolean
  hasActiveArrow?: boolean
  activeArrowPosition?: number
  align?: string
  value?: string
  name?: string
  onClick?: Function
  onOpenChange?: Function
}

const BaseTitle: React.SFC<{
  isOpen?: boolean
  hasActiveArrow?: boolean
  activeArrowPosition?: number
  className?: string
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}> = ({ children, className, isOpen, hasActiveArrow, onClick }) => (
  <div className={className} data-arrow-rotate={isOpen} data-has-arrow={hasActiveArrow} onClick={onClick}>
    {children}
  </div>
)

const SubMenuTitle = styled(BaseTitle)`
  position: relative;
  padding: 16px 40px;
  cursor: pointer;

  span {
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
    transition: all 0.3s;
  }

  [data-icon='true'] {
    color: ${T('palette.black')};
    transition: all 0.3s;
  }

  &[data-arrow-rotate='true'] {
    [data-icon='true'] {
      transform: rotate(90deg);
    }
  }

  &:hover > * {
    color: ${T('palette.primary')};
  }
`

const ActivedSubMenuTitle = SubMenuTitle.extend`
  font-weight: bold;

  &[data-has-arrow='true']::before {
    display: block;
  }

  &::before {
    content: '';
    display: none;
    position: absolute;
    top: 50%;
    right: -${({ activeArrowPosition }) => (activeArrowPosition ? activeArrowPosition : 40)}px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-width: 14px;
    border-bottom-width: 14px;
    border-right-color: ${T('palette.white')};

    transform: translateY(-50%);
    transition: all 0.3s;
  }

  &:hover > * {
    color: ${T('palette.black')};
  }
`

const SubMenuContainer = styled.ul`
  padding: 0 0 8px;
  list-style: none;
  font-size: 16px;
  line-height: 22px;
  color: ${T('palette.spruce')};

  [data-menu-item='true'] {
    padding: 8px 40px;

    & + [data-menu-item='true'] {
      padding-top: 16px;
    }

    &::after {
      bottom: 0;
    }

    &.active {
      color: ${T('palette.primary')};
      font-weight: ${T('font.weight.normal')};
    }

    &:hover {
      &.active {
        color: ${T('palette.primary')};
      }
    }
  }
`

class SubMenu extends React.Component<Props> {
  onItemClick(name: string) {
    if (this.props.onClick) this.props.onClick(this.props.name + '-' + name)
  }

  render() {
    const { className, title, isOpen, value, name, onOpenChange, hasActiveArrow, align, children } = this.props
    let hasValue = false

    const content = React.Children.map(children, (child: any, index: number) => {
      const subName = child.props.name || index.toString()

      if (this.props.name + '-' + subName === value) hasValue = true

      return React.cloneElement(child, {
        isActive: value === this.props.name + '-' + subName,
        align: align,
        key: index,
        name: subName,
        onClick: (item: string) => this.onItemClick(item)
      })
    })
    const Title = hasValue ? ActivedSubMenuTitle : SubMenuTitle

    return (
      <li className={className}>
        <Title isOpen={isOpen} hasActiveArrow={hasActiveArrow} onClick={() => onOpenChange(name)}>
          <span>{title}</span>
          <Icon glyph="angle-right" size={10} />
        </Title>
        <CollapseTransition isShow={isOpen}>
          <SubMenuContainer>{content}</SubMenuContainer>
        </CollapseTransition>
      </li>
    )
  }
}

export default SubMenu
