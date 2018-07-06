import * as React from 'react'
import styled from '../theme/styled-components'
import Icon from '../icon'
import { Transition } from '../globals'
import { T } from '../util'

export interface Props {
  checked?: boolean
  disabled?: boolean
  label?: JSX.Element | string
  onChange?: (e: React.MouseEventHandler<HTMLLabelElement>, checked: boolean) => void
  name?: string
  value?: string | number
  extra?: JSX.Element | string
  className?: string
}

export const Input = styled.input`
  border: 0;
  height: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  width: 0;
`

export const Fake = styled.span`
  position: relative;
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  border: 4px solid ${T('palette.frost')};
  box-sizing: border-box;
  transition: ${Transition.reaction.on};

  [data-icon='true'] {
    display: none;
    position: absolute;
    top: -1px;
    left: -1px;
    color: ${T('palette.white')};
  }

  &[aria-checked='true'] {
    border-color: ${T('palette.primary')};
    background: ${T('palette.primary')};

    [data-icon='true'] {
      display: block;
    }

    &[aria-disabled='true'] {
      background: ${T('palette.primary')};
    }
  }

  &[data-raidus='false'] {
    border-radius: 0;
  }

  &[aria-disabled='true'] {
    background: ${T('palette.daisy')};

    [data-icon='true'] {
      cursor: not-allowed;
    }
  }
`

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  padding: ${T('spacing.xs')}px 0;
  flex: none;
  color: ${T('palette.spruce')};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${T('palette.primary')};
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;

    &:hover {
      color: ${T('palette.spruce')};
    }
  }
`

export const Text = styled.span`
  margin-left: ${T('spacing.xs')}px;
`

class Checkbox extends React.Component<Props> {
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
    const { className, name, value, label, disabled = false, extra } = this.props
    const { checked } = this.state

    return (
      <React.Fragment>
        <Label className={className} aria-disabled={disabled}>
          <Input
            type="checkbox"
            onChange={this.handleChange}
            disabled={disabled}
            name={name}
            value={value}
            checked={checked}
            aria-checked={checked}
          />
          <Fake aria-disabled={disabled} aria-checked={checked}>
            <Icon glyph="check" size={10} />
          </Fake>
          {label ? typeof label === 'string' ? <Text aria-disabled={disabled}>{label}</Text> : label : null}
        </Label>
        {extra}
      </React.Fragment>
    )
  }
}

export default Checkbox
