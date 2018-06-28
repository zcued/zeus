import * as React from 'react'
import { DatePicker , RangePicker } from '../../../src'

export default class Page extends React.Component {
  state = {
    value: null
  }
  onChange = (value) => {
    this.setState({
      value
    })
  }

  render() {
    return (
      <React.Fragment>
        <DatePicker 
          // defaultValue="2018-06-22"
          onSelectDate={this.onChange}
        />
        
        <RangePicker 
          // defaultValue={{
          //   from: '2018-06-22',
          //   to: '2018-06-25'
          // }}
          onSelectDate={this.onChange}
        />
      </React.Fragment>
    )
  }
}
