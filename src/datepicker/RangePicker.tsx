import * as React from 'react'
import styled from '../theme/styled-components'
import DatePicker from './DatePicker'

const DateRangeWaper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width: 240px;
height: 40px;
background-color:white;
border: 1px solid #F0F4F5;
`

const SplitLine = styled.div`
border:1px solid #666666;
height:0px;
width:14px;
`

interface Props {
  onSelectDate: Function
  className?: string
  defaultValue?: {
    from: string,
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
    this.setState({
      value: Object.assign({}, this.state.value,
        {
          [type]: value
        }
      )
    }, () => this.props.onSelectDate(this.state.value))
  }

  render() {
    const { defaultValue, className } = this.props
    const { value } = this.state
    const { from } = value
    return (

      <div
        className={className}
      >
        <DateRangeWaper>
          <DatePicker
            defaultValue={defaultValue ? defaultValue.from : null}
            onSelectDate={e => this.changeDate(e, 'from')}
          />
          <SplitLine />
          <DatePicker
            defaultValue={defaultValue ? defaultValue.to : null}
            onSelectDate={e => this.changeDate(e, 'to')}
            disabledDate={from}
          />
        </DateRangeWaper>
      </div>

    )
  }
}

export default RangePicker