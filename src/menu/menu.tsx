import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'

interface Props {
  className?: string
  hasActiveArrow?: boolean
  activeArrowPosition?: number
  align?: 'center' | 'left'
  value?: string
  onChange?: Function
  onOpenChange?: Function
}

interface State {
  activeName: string
  openName: string
}

class MenuContainer extends React.Component<Props, State> {
  state = {
    activeName: this.props.value,
    openName: this.props.value.split('-').length === 2 ? this.props.value.split('-')[0] : this.props.value
  }

  onItemClick(name: string) {
    this.setState(
      {
        activeName: name
      },
      () => {
        if (this.props.onChange) this.props.onChange(name)
      }
    )
  }

  onOpenChange(name: string) {
    this.setState(
      {
        openName: name === this.state.openName ? null : name
      },
      () => {
        if (this.props.onOpenChange) this.props.onOpenChange(name)
      }
    )
  }

  render() {
    const { className, hasActiveArrow, activeArrowPosition, align, onChange, children } = this.props

    return (
      <ul className={className}>
        {React.Children.map(children, (child: any, index: number) => {
          const name = child.props.name || index.toString()
          const title = child.props.title

          return React.cloneElement(child, {
            isActive: this.state.activeName === name,
            isOpen: this.state.openName === name,
            hasActiveArrow: hasActiveArrow,
            activeArrowPosition: activeArrowPosition,
            align: align,
            key: index,
            value: this.state.activeName,
            name: name,
            title: title,
            onClick: (item: string) => this.onItemClick(item),
            onChange: (item: string) => {
              if (onChange) onChange(item)
            },
            onOpenChange: (item: string) => this.onOpenChange(item)
          })
        })}
      </ul>
    )
  }
}

const Menu = styled(MenuContainer)`
  margin: 0;
  padding: ${T('spacing.md')}px 0;
  width: 212px;
  font-size: ${T('font.size.md')}px;
  line-height: 28px;
  text-align: ${({ align }) => (align ? align : 'center')};
  background: ${T('palette.white')};
  list-style: none;
`

export default Menu
