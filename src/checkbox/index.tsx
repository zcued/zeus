import * as React from 'react'
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

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.checked !== this.props.checked) {
      this.setState({ checked: nextProps.checked })
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
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path
                  d="M21.244 1.092c.809-1.14 2.428-1.435 3.617-.66 1.189.776 1.497 2.329.688 3.468L13.242 24.908c-.965 1.36-3.016 1.469-4.131.218L.625 15.612c-.935-1.047-.806-2.623.286-3.519 1.093-.896 2.736-.773 3.671.275l6.272 7.03 10.39-18.306z"
                  id="b"
                />
                <filter x="-23.1%" y="-11.5%" width="146.2%" height="146.2%" filterUnits="objectBoundingBox" id="a">
                  <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1" />
                  <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" in="shadowBlurOuter1" />
                </filter>
              </defs>
              <g transform="translate(3)" fillRule="nonzero" fill="none">
                <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                <use fill="#FFF" fillRule="evenodd" xlinkHref="#b" />
              </g>
            </svg>
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
