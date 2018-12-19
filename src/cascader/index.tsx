import * as React from 'react'
import styled, { keyframes } from '../theme/styled-components'
import { noop, zIndex } from '../globals'
import { T } from '../util'
import Icon from '../icon'
import Input from '../input'
import ClickOutSide from '../dropdown/click-outside'

interface Option {
  label: string
  value: string
  disabled?: boolean
  children?: Array<Option>
}

interface Props {
  options: Array<Option>
  value?: Array<any>
  placeholder?: string
  disabled?: boolean
  title?: Array<string>
  level?: number
  listWidth?: number
  listHeight?: number
  changeOnSelect?: boolean
  displayRender?: Function
  onChange?: Function
  onToggle?: Function
  className?: string
}

const StyledClickOutSide = styled(ClickOutSide)`
  display: inline-block;
  background-color: transparent;
  position: relative;
  color: ${T('palette.black')};
`

const CascaderWrapper = styled.div`
  position: relative;

  input {
    padding-right: 26px;
    cursor: pointer;

    &[readonly] {
      cursor: pointer;
    }
  }

  [data-icon='true'] {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const PoppersContainer = styled.div`
  display: flex;
  position: absolute;
  padding: 0 24px;
  min-width: 100%;
  font-size: ${T('font.size.sm')}px;
  background-color: ${T('palette.white')};
  box-shadow: 0 4px 24px 0 ${T('palette.black16')};
  box-sizing: border-box;
  animation: ${fadeIn} 0.1s ease-in 0.1s forwards;
  z-index: ${zIndex.dropdown};
  opacity: 0;

  div {
    > span {
      display: inline-block;
      padding: 16px 8px;
      width: 100%;
      border-bottom: 1px solid ${T('palette.daisy')};
      box-sizing: border-box;
      cursor: default;
    }

    ul {
      list-style: none;
      margin: 8px 0;
      padding: 0;
      width: 100%;
      box-sizing: border-box;
      overflow-y: scroll;

      li {
        padding: 8px;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          color: ${T('palette.white')};
          background: ${T('palette.primary')};
        }

        &[data-selected='true'] {
          font-weight: ${T('font.weight.bold')};
          color: ${T('palette.primary')};

          &:hover {
            font-weight: ${T('font.weight.normal')};
            color: ${T('palette.white')};
          }
        }
      }
    }

    + div {
      > span {
        padding-left: 32px;
      }

      ul {
        padding-left: 24px;
      }
    }
  }
`

class Cascader extends React.Component<Props> {
  static defaultProps: Props = {
    options: [
      {
        label: '',
        value: ''
      }
    ],
    value: [],
    listWidth: 120,
    listHeight: 240,
    onToggle: noop
  }

  state = {
    isOpen: false,
    showValue: false
  }

  handleClick = () => {
    this.toggle()
  }

  handleClickOutSide = () => {
    this.setState({ isOpen: false })
  }

  toggle = () => {
    this.props.onToggle()

    this.setState({ isOpen: !this.state.isOpen })
  }

  handleSelect = (index: number, selectOption: Option) => {
    let { value, changeOnSelect, onChange } = this.props

    if (value.length > index) {
      value[index] = selectOption.value
      value = value.slice(0, index + 1)
    } else {
      value.push(selectOption.value)
    }

    if (!selectOption.children || selectOption.children.length === 0) {
      this.toggle()
    }

    if (onChange) {
      if (changeOnSelect) {
        this.setState({ showValue: true })
        onChange(value, selectOption)
      } else if (!selectOption.children || selectOption.children.length === 0) {
        this.setState({ showValue: true })
        onChange(value, selectOption)
      } else {
        this.setState({ showValue: false })
      }
    }
  }

  displayRender = () => {
    const { value, displayRender } = this.props
    let options = this.props.options
    let label = []

    value.forEach(item => {
      const option = options.filter(opt => opt.value === item)[0]

      if (option) {
        options = option.children ? option.children : []

        label.push(option.label)
      }
    })

    if (displayRender) {
      return displayRender(label)
    }

    return label.join(' / ')
  }

  render() {
    const { className, value, placeholder, disabled, title, level, listWidth, listHeight } = this.props
    const { isOpen, showValue } = this.state
    let list = []
    let options = this.props.options

    if (level) {
      for (let i = 0; i < level; i++) {
        const option = options.filter(item => {
          return item.value === value[i - 1]
        })[0]

        options = i !== 0 && value.length >= i ? (option && option.children ? option.children : []) : options
        list.push(
          <div key={i} style={{ width: i === 0 ? `${listWidth}px` : `${listWidth + 24}px` }}>
            {title && <span>{title[i]}</span>}
            {i === 0 ? (
              <ul style={{ height: `${listHeight}px` }}>
                {options.map(item => {
                  return (
                    <li
                      key={item.value}
                      data-selected={item.value === value[i]}
                      onClick={() => this.handleSelect(i, item)}
                    >
                      <span>{item.label}</span>
                    </li>
                  )
                })}
              </ul>
            ) : value.length >= i ? (
              <ul style={{ height: `${listHeight}px` }}>
                {options.map(item => {
                  return (
                    <li
                      key={item.value}
                      data-selected={item.value === value[i]}
                      onClick={() => this.handleSelect(i, item)}
                    >
                      <span>{item.label}</span>
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </div>
        )
      }
    }

    return (
      <StyledClickOutSide onClick={this.handleClickOutSide}>
        <CascaderWrapper className={className}>
          <Input
            value={showValue ? this.displayRender() : []}
            placeholder={placeholder || '请选择'}
            disabled={disabled}
            readOnly={true}
            onClick={this.handleClick}
          />
          <Icon glyph="angle-down" size={10} />
          {isOpen ? <PoppersContainer>{list}</PoppersContainer> : null}
        </CascaderWrapper>
      </StyledClickOutSide>
    )
  }
}

export default Cascader
