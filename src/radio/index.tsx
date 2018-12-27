import * as React from 'react'
import styled from '../theme/styled-components'
import { Transition } from '../globals'
import { T } from '../util'
import { Input, Label, Text } from '../checkbox'

interface Props {
  checked?: boolean
  disabled?: boolean
  label?: JSX.Element | string
  onChange?: Function
  name?: string
  value?: string | number
  extra?: JSX.Element | string
  radius?: boolean
  className?: string
}

const Fake = styled.span`
  position: relative;
  flex: 0 0 16px;
  flex-basis: auto;
  width: 16px;
  height: 16px;
  border: 1px solid ${T('palette.stone')};
  border-radius: 50%;
  box-sizing: border-box;
  transition: ${Transition.reaction.on};

  &[aria-checked='true'] {
    border-color: ${T('palette.primary')};

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${T('palette.primary')};
      transform: translateX(-50%) translateY(-50%);
    }

    &[aria-disabled='true'] {
      border-color: ${T('palette.frost')};

      &::after {
        background: ${T('palette.frost')};
      }
    }
  }

  &[aria-disabled='true'] {
    border-color: ${T('palette.frost')};
  }
`

class Radio extends React.Component<Props> {
  state = {
    checked: this.props.checked
  }

  static getDerivedStateFromProps(nextProps: Props) {
    return {
      checked: nextProps.checked
    }
  }

  handleChange = e => {
    const { disabled, onChange } = this.props
    const { checked } = this.state

    this.setState({ checked: !checked })

    if (!disabled && onChange) {
      onChange(e, !checked)
    }
  }

  render() {
    const { className, name, value, label, disabled = false, extra, radius } = this.props
    const { checked } = this.state

    return (
      <React.Fragment>
        <Label className={className} aria-disabled={disabled} aria-checked={checked}>
          <Input
            type="radio"
            onChange={this.handleChange}
            disabled={disabled}
            name={name}
            value={value}
            checked={checked}
            aria-checked={checked}
          />
          <Fake aria-disabled={disabled} aria-checked={checked} />
          {label ? typeof label === 'string' ? <Text aria-disabled={disabled}>{label}</Text> : label : null}
        </Label>
        {extra}
      </React.Fragment>
    )
  }
}

export default Radio
