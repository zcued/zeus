import * as React from 'react'
import { DatePicker } from '../../../src'

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
          onSelectDate={this.onChange}
        />
      </React.Fragment>
    )
  }
}
