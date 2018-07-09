import * as React from 'react'
import { DatePicker, RangePicker } from '../../../src'

export default class Page extends React.Component {
  state = {
    value: null
  }
  onChange = value => {
    this.setState({
      value
    })
  }

  render() {
    return (
      <React.Fragment>
        <DatePicker placeholder="下载时间" onChange={this.onChange} />

        <RangePicker
          placeholder="下载时间"
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
