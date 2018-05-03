import * as React from 'react'
import styled from '../theme/styled-components'
import { shallowEquals } from '../util'

const CollapseStyled = styled.div`
  background: ${({ theme }) => theme.palette.white};
`

const toArray = value => {
  let target = value
  if (!Array.isArray(target)) {
    target = target ? [target] : []
  }
  return target
}

interface Props {
  value?: Array<string>
  className?: string
  onChange?: any
}

export default class Collapse extends React.Component<Props> {
  state = {
    activeKey: toArray(this.props.value)
  }

  componentWillReceiveProps(nextProps: Props) {
    if (!shallowEquals(this.props, nextProps)) {
      this.setState({ activeKey: toArray(nextProps.value) })
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
        activeKey: activeKey.concat(key)
      })
    }
    if (this.props.onChange) this.props.onChange(key)
  }

  render() {
    return (
      <CollapseStyled className={this.props.className}>
        {React.Children.map(this.props.children, (child: any) => {
          return React.cloneElement(child, {
            isActive: this.state.activeKey.indexOf(child.key) > -1,
            key: child.key,
            onClick: () => this.onItemClick(child.key)
          })
        })}
      </CollapseStyled>
    )
  }
}
