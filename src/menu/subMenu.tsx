import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'
import Icon from '../icon'
import { MenuItemContainer } from './menuItem'

interface Props {
  className?: string
  title?: string
  isActive?: boolean
  hasActiveArrow?: boolean
  activeArrowPosition?: number
  name?: string
  onChange?: Function
  onOpenChange?: Function
}

const SubMenuTitle = styled.div`
  position: relative;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s;

  span {
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
  }

  [data-icon='true'] {
    color: ${T('palette.black')};
    transition: all 0.3s;
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
`

const SubMenuContainer = styled.ul`
  padding: 0 0 16px;
  list-style: none;
  font-size: 16px;
  color: ${T('palette.spruce')};
`

class SubMenu extends React.Component<Props> {
  onItemClick(name: string) {
    if (this.props.onChange) this.props.onChange(this.props.name + '-' + name)
  }

  render() {
    const { className, title, isActive, name, onOpenChange, children } = this.props

    return (
      <li className={className}>
        <SubMenuTitle className={isActive ? ' active' : ''} onClick={() => onOpenChange(name)}>
          <span>{title}</span>
          <Icon glyph="angle-right" size={10} />
        </SubMenuTitle>
        <SubMenuContainer>
          {React.Children.map(children, (child: any, index: number) => {
            const subName = child.props.name || index.toString()

            return React.cloneElement(child, {
              key: index,
              name: subName,
              onClick: (item: string) => this.onItemClick(item)
            })
          })}
        </SubMenuContainer>
      </li>
    )
  }
}

const SubMenuStyled = styled(SubMenu)`
  ${SubMenuTitle} {
    &.active {
      font-weight: bold;

      &::before {
        content: '';
        display: ${({ hasActiveArrow }) => (hasActiveArrow ? 'block' : 'none')};
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

      [data-icon='true'] {
        transform: rotate(90deg);
      }

      &::after {
        opacity: 1;
      }
    }

    &:hover {
      color: ${T('palette.primary')};

      [data-icon='true'] {
        color: ${T('palette.primary')};
      }

      &.active {
        color: ${T('palette.black')};

        [data-icon='true'] {
          color: ${T('palette.black')};
        }
      }
    }
  }

  ${SubMenuContainer} {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};

    ${MenuItemContainer} {
      padding: 8px;
    }
  }
`

export default SubMenuStyled
