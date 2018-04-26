import * as React from 'react'
import { Dropdown } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Dropdown text="hover">
          <div>123123</div>
          <div>456456</div>
        </Dropdown>

        <Dropdown text="click" trigger="click">
          <div>123123</div>
          <div>456456</div>
        </Dropdown>
      </React.Fragment>
    )
  }
}
