import * as React from 'react'
import { Pagination } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Pagination current={1} total={25} pageSize={10} />
      </React.Fragment>
    )
  }
}
