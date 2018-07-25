import * as React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { hexa } from '../globals'

interface Option {
  [key: string]: any
}

interface Props {
  className?: string
  value?: any
  defaultValue?: any
  options?: Array<Option>
  'aria-describedby'?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  autoFocus?: boolean
  backspaceRemovesValue?: boolean
  blurInputOnSelect?: boolean
  captureMenuScroll?: boolean
  closeMenuOnSelect?: boolean
  components?: any
  controlShouldRenderValue?: boolean
  delimiter?: string
  escapeClearsValue?: boolean
  filterOption?: Function
  formatGroupLabel?: Function
  formatOptionLabel?: Function
  getOptionLabel?: Function
  getOptionValue?: Function
  hideSelectedOptions?: boolean
  id?: string
  inputValues?: string
  inputId?: string
  instanceId?: 'number' | 'string'
  isClearable?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isOptionDisabled?: any
  isOptionSelected?: Function
  isMulti?: boolean
  isRtl?: boolean
  isSearchable?: boolean
  loadingMessage?: Function
  minMenuHeight?: number
  maxMenuHeight?: number
  menuIsOpen?: boolean
  menuPlacement?: 'auto' | 'bottom' | 'top'
  menuPosition?: 'absolute' | 'fixed'
  menuPortalTarget?: HTMLElement
  menuShouldBlockScroll?: boolean
  menuShouldScrollIntoView?: boolean
  name?: string
  noOptionsMessage?: Function
  onBlur?: Function
  onChange?: Function
  onFocus?: Function
  onInputChange?: Function
  onKeyDown?: Function
  onMenuOpen?: Function
  onMenuClose?: Function
  onMenuScrollToTop?: Function
  onMenuScrollToBottom?: Function
  openMenuOnFocus?: boolean
  openMenuOnClick?: boolean
  pageSize?: number
  placeholder?: string
  screenReaderStatus?: Function
  styles?: any
  tabIndex?: string
  tabSelectsValue?: boolean
}

class SelectWrapper extends React.Component<Props> {
  render() {
    const { className, value, defaultValue, options, ...rest } = this.props
    let option = null

    options.forEach(item => {
      if (item.value === value || item.value === defaultValue) {
        option = item
      }
    })

    return (
      <Select
        placeholder="请选择"
        noOptionsMessage={() => {
          return '没有任何选项'
        }}
        className={className}
        classNamePrefix="react-select"
        value={option}
        defaultValue={option}
        options={options}
        {...rest}
      />
    )
  }
}

const SelectWrapperStyled = styled(SelectWrapper)`
  .react-select__control {
    border-color: ${({ theme }) => theme.palette.frost};
    border-radius: 0;
    background-color: ${({ theme }) => theme.palette.white};
    cursor: pointer;
    box-shadow: none;
    height: 32px;
    min-height: 32px;
    &:hover {
      border-color: ${({ theme }) => theme.palette.stone};
      box-shadow: none;
    }
  }

  .react-select__value-container {
    padding: 2px 8px;
  }

  .react-select__placeholder,
  .react-select__single-value {
    font-size: ${({ theme }) => theme.font.size.sm}px;
  }

  .react-select__placeholder {
    color: ${({ theme }) => theme.palette.spruce};
  }

  .react-select__single-value {
    font-weight: regular;
    color: ${({ theme }) => theme.palette.black};
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator {
    padding: 8px 5px;
    color: ${({ theme }) => theme.palette.black};

    &:hover {
      color: ${({ theme }) => theme.palette.black};
    }
  }

  .react-select__option {
    font-size: ${({ theme }) => theme.font.size.sm}px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;

    &.react-select__option--is-focused {
      background: ${({ theme }) => hexa(theme.palette.primary, 0.6)};
    }

    &[aria-selected='true'] {
      background: ${({ theme }) => theme.palette.primary};
    }
  }
`

export default SelectWrapperStyled
