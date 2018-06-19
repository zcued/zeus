import * as React from 'react'
import Icon from '../icon'
import { Input, Fake, Label, Text } from '../checkbox'

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
        <Label className={className} aria-disabled={disabled}>
          <Input
            type="radio"
            onChange={this.handleChange}
            disabled={disabled}
            name={name}
            value={value}
            checked={checked}
            aria-checked={checked}
          />
          <Fake aria-disabled={disabled} aria-checked={checked} data-radius={radius}>
            <Icon glyph="check" size={10} />
          </Fake>
          {label ? typeof label === 'string' ? <Text aria-disabled={disabled}>{label}</Text> : label : null}
        </Label>
        {extra}
      </React.Fragment>
    )
  }
}

export default Radio
