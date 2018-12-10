import * as React from 'react'
import { DatePicker, RangePicker } from '../../../src'

export default class Page extends React.Component {
  state = {
    value: null
  }
  onChange = obj => {
    this.setState({
      value: obj.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <DatePicker placeholder="下载时间" onChange={this.onChange} />

        <RangePicker
          startPlaceholder="开始时间"
          endPlaceholder="结束时间"
          defaultValue={{
            from: '2018-06-22',
            to: '2018-06-25'
          }}
          onChange={this.onChange}
        />
      </React.Fragment>
    )
  }
}
