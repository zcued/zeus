import * as React from 'react'
import styled from '../theme/styled-components'
import DatePicker from './DatePicker'

const DateRangeWaper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width: 240px;
height: 40px;
border: 1px solid #F0F4F5;
`

const SplitLine = styled.div`
border:1px solid #666666;
height:0px;
width:14px;
`

interface Props {
  onSelectDate: Function,
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
    const { defaultValue } = this.props
    return(
      
        <div>
          <DateRangeWaper>
            <DatePicker 
              defaultValue={defaultValue ? defaultValue.from : null}
              onSelectDate={e => this.changeDate(e, 'from')}
            />
            <SplitLine/>
            <DatePicker 
              defaultValue={defaultValue ? defaultValue.to : null}
              onSelectDate={e => this.changeDate(e, 'to')}
            />
          </DateRangeWaper>
        </div>
      
    )
  }
}

export default RangePicker