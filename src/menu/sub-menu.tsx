import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'
import Icon from '../icon'

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

const BaseTitle: React.SFC<{
  activeArrowPosition?: number
  className?: string
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}> = ({ children, className, onClick }) => (
  <div className={className} onClick={onClick}>
    {children}
  </div>
)

const SubMenuTitle = styled(BaseTitle)`
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

  &::after {
    opacity: 1;
  }

  [data-icon='true'] {
    transform: rotate(90deg);
  }

  &:hover > * {
    color: ${T('palette.black')};
  }
`

const SubMenuContainer = styled.ul`
  padding: 0 0 16px;
  list-style: none;
  font-size: 16px;
  color: ${T('palette.spruce')};

  & [data-menu-item='true'] {
    padding: 8px;
  }
`

class SubMenu extends React.Component<Props> {
  onItemClick(name: string) {
    if (this.props.onChange) this.props.onChange(this.props.name + '-' + name)
  }

  render() {
    const { className, title, isActive, name, onOpenChange, hasActiveArrow, children } = this.props
    const Title = isActive ? ActivedSubMenuTitle : SubMenuTitle

    return (
      <li className={className}>
        <Title onClick={() => onOpenChange(name)} data-has-arrow={hasActiveArrow}>
          <span>{title}</span>
          <Icon glyph="angle-right" size={10} />
        </Title>
        {isActive && (
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
        )}
      </li>
    )
  }
}

export default SubMenu
