import * as React from 'react'
import styled from '../theme/styled-components'
import DatePicker from './data-picker'

const DateRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 238px;
  height: 32px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.palette.black16};

  > div {
    border: none;

    &:first-child,
    &:last-child {
      height: 30px;
    }
  }
`

const SplitLine = styled.div`
  width: 16px;
  height: 2px;
  background: ${({ theme }) => theme.palette.black};
`

interface Props {
  onChange: Function
  className?: string
  startPlaceholder?: string
  endPlaceholder?: string
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
      () => this.props.onChange(this.state.value)
    )
  }

  render() {
    const { startPlaceholder, endPlaceholder, defaultValue, className } = this.props
    const { value } = this.state
    const { from } = value

    return (
      <DateRangeWrapper className={className}>
        <DatePicker
          placeholder={startPlaceholder}
          defaultValue={defaultValue ? defaultValue.from : null}
          onChange={e => this.changeDate(e.value, 'from')}
        />
        <SplitLine />
        <DatePicker
          placeholder={endPlaceholder}
          defaultValue={defaultValue ? defaultValue.to : null}
          onChange={e => this.changeDate(e.value, 'to')}
          disabledDate={from}
        />
      </DateRangeWrapper>
    )
  }
}

export default RangePicker
