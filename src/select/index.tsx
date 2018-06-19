import * as React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { hexa } from '../globals'

interface Option {
  [key: string]: any
}

interface Props {
  value?: any
  defaultValue?: any
  options?: Array<Option>
  className?: string
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
    min-height: 40px;
    border-color: ${({ theme }) => theme.palette.daisy};
    border-radius: 0;
    background-color: ${({ theme }) => theme.palette.white};

    &.react-select__control-is-focused {
      border-color: ${({ theme }) => theme.palette.primary};
      box-shadow: 0px 0px 0 1px #ea4335;
    }

    &:hover {
      border-color: ${({ theme }) => theme.palette.daisy};

      &.react-select__control-is-focused {
        border-color: ${({ theme }) => theme.palette.primary};
      }
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
    font-weight: ${({ theme }) => theme.font.weight.bold};
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

    &.react-select__option--is-focused {
      background: ${({ theme }) => hexa(theme.palette.primary, 0.6)};
    }

    &[aria-selected="true"] {
      background: ${({ theme }) => theme.palette.primary};
    }
  }
`

export default SelectWrapperStyled
