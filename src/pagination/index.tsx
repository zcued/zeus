import * as React from 'react'
import Icon from '../icon'
import { noop } from '../globals'
import { JumperInput, UL, LI, Count } from './style'

interface Props {
  pageSize?: number
  current?: number
  defaultCurrent?: number
  total?: number
  onChange?: Function
  className?: string
}

interface State {
  current: number
  currentInput: number | string
}

class Pagination extends React.Component<Props, State> {
  static defaultProps = {
    onChange: noop
  }

  state = {
    current: this.props.current || this.props.defaultCurrent || 1,
    currentInput: this.props.current || this.props.defaultCurrent || 1
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.hasOwnProperty('current')) {
      return {
        current: props.current,
        currentInput: state.currentInput
      }
    }

    return null
  }

  handleChange = e => {
    let value = parseInt(e.target.value, 10)

    if (Number.isNaN(value) || value <= 0) {
      this.setState({ currentInput: '' })
    } else {
      this.setState({ currentInput: value })
    }
  }

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      let { currentInput } = this.state
      const { total, onChange } = this.props
      if (currentInput > total) {
        currentInput = total
      }

      this.setState({ current: currentInput, currentInput }, () => onChange(currentInput))
    }
  }

  next = () => {
    let { current } = this.state

    if (current === this.props.total) return

    current = current + 1
    this.setState({ current, currentInput: current })
    this.props.onChange(current)
  }

  prev = () => {
    let { current } = this.state

    if (current === 1) return

    current = current - 1
    this.setState({ current, currentInput: current })
    this.props.onChange(current)
  }

  render() {
    const { total, className } = this.props
    const { current, currentInput } = this.state

    return (
      <UL className={className}>
        <LI onClick={this.prev} role="prev">
          <button disabled={current === 1}>
            <Icon glyph="angle-left" size={10} />
          </button>
        </LI>
        <LI>
          <JumperInput type="text" onKeyUp={this.handleKeyUp} value={currentInput} onChange={this.handleChange} />
        </LI>
        <LI onClick={this.next} role="next">
          <button disabled={current === total}>
            <Icon glyph="angle-right" size={10} />
          </button>
        </LI>
        <LI>
          总页数<Count>{total}</Count>页
        </LI>
      </UL>
    )
  }
}

export default Pagination
