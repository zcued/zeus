import * as React from 'react'
import { MenuContainer } from './style'

interface Props {
  className?: string
  hasActiveArrow?: boolean
  activeArrowPosition?: number
  value?: string
  onChange?: Function
  onOpenChange?: Function
}

interface State {
  activeName: string
}

export default class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      activeName: props.value
    }
  }

  onItemClick(name: string) {
    this.setState({
      activeName: name
    }, () => {
      if (this.props.onChange) this.props.onChange(name)
    })
  }

  onOpenChange(name: string) {
    this.setState({
      activeName: name
    }, () => {
      if (this.props.onOpenChange) this.props.onOpenChange(name)
    })
  }

  render() {
    const { className, hasActiveArrow, activeArrowPosition, onChange, children } = this.props

    return (
      <MenuContainer className={className}>
        {React.Children.map(children, (child: any, index: number) => {
          const name = child.props.name || index.toString()
          const title = child.props.title

          return React.cloneElement(child, {
            isActive: this.state.activeName === name,
            hasActiveArrow: hasActiveArrow,
            activeArrowPosition: activeArrowPosition,
            key: index,
            name: name,
            title: title,
            onClick: (item: string) => this.onItemClick(item),
            onChange: (item: string) => onChange(item),
            onOpenChange: (item: string) => this.onOpenChange(item)
          })
        })}
      </MenuContainer>
    )
  }
}
