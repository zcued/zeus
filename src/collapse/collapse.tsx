import * as React from 'react'
import styled from '../theme/styled-components'

export interface Props {
  value?: string | Array<string>
  accordion?: boolean
  className?: string
  onChange?: any
}

const StyledCollapse = styled.div`
  background: ${({ theme }) => theme.palette.white};
`

const toArray = value => {
  let target = value
  if (!Array.isArray(target)) {
    target = target ? [target] : []
  }
  return target
}

class Collapse extends React.Component<Props> {
  state = {
    activeKey: toArray(this.props.value)
  }
  static getDerivedStateFromProps(nextProps: Props) {
    return {
      activeKey: toArray(nextProps.value)
    }
  }

  onItemClick(key: string) {
    let { activeKey } = this.state

    activeKey = toArray(activeKey)

    if (activeKey.indexOf(key) > -1) {
      this.setState({
        activeKey: activeKey.filter(k => k !== key)
      })
    } else {
      this.setState({
        activeKey: this.props.accordion ? [key] : activeKey.concat(key)
      })
    }

    if (this.props.onChange) this.props.onChange(key)
  }

  render() {
    return (
      <StyledCollapse className={this.props.className}>
        {React.Children.map(this.props.children, (child: any, index: number) => {
          const key = child.key === null ? index.toString() : child.key

          return React.cloneElement(child, {
            isActive: this.state.activeKey.indexOf(key) > -1,
            key: key,
            onClick: () => this.onItemClick(key)
          })
        })}
      </StyledCollapse>
    )
  }
}

export default Collapse
