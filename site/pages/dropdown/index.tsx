import * as React from 'react'
import { Dropdown } from '../../../src'

export default class Page extends React.Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

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

        <Dropdown text="Controled dropdown" isOpen={this.state.isOpen} onClick={this.handleToggle} trigger="click">
          <div>123123</div>
          <div>456456</div>
        </Dropdown>
      </React.Fragment>
    )
  }
}
