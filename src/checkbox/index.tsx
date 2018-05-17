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
  position: relative;
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  border: 4px solid ${T('palette.frost')};
  box-sizing: border-box;
  transition: ${Transition.reaction.on};

  &[aria-checked='true'] {
    border-color: ${T('palette.primary')};
    background: ${T('palette.primary')};

    svg {
      display: block;
    }
  }

  &.disabled {
    background: ${({ theme }) => theme.palette.daisy};
  }

  svg {
    display: none;
    position: absolute;
    top: 0px;
    left: -1px;
    width: 10px;
    height: 10px;
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
          <Fake className={disabled ? 'disabled' : ''} aria-checked={checked}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path d="M21.244 1.092c.809-1.14 2.428-1.435 3.617-.66 1.189.776 1.497 2.329.688 3.468L13.242 24.908c-.965 1.36-3.016 1.469-4.131.218L.625 15.612c-.935-1.047-.806-2.623.286-3.519 1.093-.896 2.736-.773 3.671.275l6.272 7.03 10.39-18.306z" id="b"/>
                <filter x="-23.1%" y="-11.5%" width="146.2%" height="146.2%" filterUnits="objectBoundingBox" id="a">
                  <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"/>
                  <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" in="shadowBlurOuter1"/>
                </filter>
              </defs>
              <g transform="translate(3)" fill-rule="nonzero" fill="none">
                <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                <use fill="#FFF" fill-rule="evenodd" xlinkHref="#b" />
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
