import * as React from 'react'
import styled from '../theme/styled-components'
import DatePicker from './data-picker'

const DateRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 238px;
  height: 38px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.palette.daisy};

  > div {
    border: none;
  }
`

const SplitLine = styled.div`
  width: 16px;
  height: 2px;
  background: ${({ theme }) => theme.palette.black};
`

interface Props {
  onSelectDate: Function
  className?: string
  placeholder?: string
  defaultValue?: {
    from: string
    to: string
  }
}

class RangePicker extends React.Component<Props> {
  state = {
    value: {
      from: null,
      to: null
    }
  }

  changeDate = (value: string, type: string) => {
    this.setState(
      {
        value: Object.assign({}, this.state.value, {
          [type]: value
        })
      },
      () => this.props.onSelectDate(this.state.value)
    )
  }

  render() {
    const { placeholder, defaultValue, className } = this.props
    const { value } = this.state
    const { from } = value

    return (
      <DateRangeWrapper className={className}>
        <DatePicker
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue.from : null}
          onSelectDate={e => this.changeDate(e, 'from')}
        />
        <SplitLine />
        <DatePicker
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue.to : null}
          onSelectDate={e => this.changeDate(e, 'to')}
          disabledDate={from}
        />
      </DateRangeWrapper>
    )
  }
}

export default RangePicker
