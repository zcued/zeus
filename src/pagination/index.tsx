import * as React from 'react'
import Icon from '../icon'
import { noop } from '../globals'
import styled from '../theme/styled-components'
import Input from '../input'
import { T } from '../util'

interface Props {
  pageSize?: number
  current?: number
  defaultCurrent?: number
  total?: number
  onChange?: Function
  className?: string
}

interface State {
  current: number | string
  currentInput: number | string
}

export const JumperInput = styled(Input)`
  width: 56px;
  height: 100%;
  border: none;
  border-bottom: 2px solid ${T('palette.black')};
  text-align: center;
  font-size: ${T('font.size.sm')}px;
  padding: 0;

  &:focus {
    border-color: ${T('palette.black')};
    box-shadow: none;
    outline: none;
  }
`

export const UL = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  margin: 0;
  font-size: ${T('font.size.sm')}px;
  & > li:last-child {
    color: ${T('palette.spruce')};
    letter-spacing: 0;
    text-align: center;
  }

  & > li[role] {
    cursor: pointer;
  }
`

export const LI = styled.li`
  height: 24px;
  display: flex;
  align-items: center;
  & > button {
    cursor: inherit;
    border: none;
    outline: none;
    height: 100%;
    line-height: 1;
    background: transparent;
    margin: 0 ${T('spacing.sm')}px;
    padding: 0;
  }
`

export const Count = styled.span`
  color: ${T('palette.black')};
  margin: 0 4px;
`

class Pagination extends React.Component<Props, State> {
  static defaultProps = {
    onChange: noop
  }

  state = {
    current: this.props.current || this.props.defaultCurrent || 1,
    currentInput: this.props.current || this.props.defaultCurrent || 1
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.hasOwnProperty('current') && state.current === state.currentInput) {
      return {
        current: props.current,
        currentInput: props.current
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

  handleBlur = () => {
    this.setState({ currentInput: this.state.current })
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
          <JumperInput
            type="text"
            onKeyUp={this.handleKeyUp}
            value={currentInput}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
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
