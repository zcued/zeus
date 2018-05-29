import * as React from 'react'
import Icon from '../icon'
import { Input, Fake, Label, Text } from './style'

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

class Checkbox extends React.Component<Props> {
  state = {
    checked: this.props.checked
  }

  static getDerivedStateFromProps(nextProps: Props) {
    return {
      current: nextProps.checked
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
          <Fake className={disabled ? 'disabled' : ''} aria-checked={checked}>
            <Icon glyph="check" size={10} />
          </Fake>
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
