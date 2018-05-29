import * as React from 'react'
import { Pagination } from '../../../src'

export default class Page extends React.Component {
  state = {
    current: 1
  }

  onChange = (current) => {
    this.setState({ current })
  }

  render() {
    return (
      <React.Fragment>
        <Pagination current={this.state.current} total={25} pageSize={10} onChange={this.onChange} />
        <Pagination current={this.state.current} total={25} pageSize={10} onChange={this.onChange} />
        <Pagination defaultCurrent={1} total={25} pageSize={10} />
      </React.Fragment>
    )
  }
}
