import * as React from 'react'
import styled from '../theme/styled-components'
import { Transition } from '../globals'
import { T } from '../util'

interface Props {
  checked?: boolean
  disabled?: boolean
  label?: JSX.Element | string
  onChange?: Function
  name?: string
  value?: string | number
  extra?: JSX.Element | string
  className?: string
}

const Input = styled.input`
  border: 0;
  height: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  width: 0;
`

const Fake = styled.span`
  border: 4px solid ${T('palette.frost')};
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  transition: ${Transition.reaction.on};
  &[aria-checked='true'] {
    border-color: ${T('palette.primary')};
  }

  &.disabled {
    background: ${({ theme }) => theme.palette.daisy};
  }
`

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  padding: 10px 0;
  flex: none;
  color: ${T('palette.spruce')};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${T('palette.primary')};
  }

  &.disabled {
    cursor: not-allowed;

    &:hover {
      color: ${T('palette.spruce')};
    }
  }
`

const Text = styled.span`
  margin-left: 10px;
`

class Checkbox extends React.Component<Props> {
  state = {
    checked: this.props.checked
  }

  handleChange = e => {
    const { disabled, onChange } = this.props
    const { checked } = this.state
    this.setState({ checked: !checked })

    if (!disabled && onChange) {
      onChange(!checked, e)
    }
  }

  render() {
    const { className, name, value, label, disabled = false, extra } = this.props
    const { checked } = this.state
    return (
      <React.Fragment>
        <Label className={disabled ? `${className} disabled` : className}>
          <Input
            type="checkbox"
            onChange={this.handleChange}
            disabled={disabled}
            name={name}
            value={value}
            checked={checked}
            aria-checked={checked}
          />
          <Fake className={disabled ? 'disabled' : ''} aria-checked={checked} />
          {label ? (
            typeof label === 'string' ? (
              <Text className={disabled ? 'text disabled' : 'text'}>{label}</Text>
            ) : (
              label
            )
          ) : null}
        </Label>
        {extra}
      </React.Fragment>
    )
  }
}

export default Checkbox
