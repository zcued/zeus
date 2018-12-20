import * as React from 'react'
import { Dropdown } from '../../../src'

export default class Page extends React.Component {
  state = {
    isOpenClick: false,
    isOpenHover: false
  }

  handleToggleClick = () => {
    this.setState({ isOpenClick: !this.state.isOpenClick })
  }

  handleToggleHover = () => {
    this.setState({ isOpenHover: !this.state.isOpenHover })
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown text="hover">
          <div>123123</div>
          <div>456456</div>
        </Dropdown>
        <Dropdown text="hover2">
          <div>hover2</div>
          <div>hover2</div>
        </Dropdown>
        <Dropdown text="hover3">
          <div>hover3</div>
          <div>hover3</div>
        </Dropdown>
        <Dropdown text="hover4">
          <div onClick={() => console.error(4)}>hover4</div>
          <div>hover4</div>
        </Dropdown>
        <Dropdown text="click" trigger="click">
          <div>123123</div>
          <div>456456</div>
        </Dropdown>

        <Dropdown
          text="Controled click dropdown"
          isOpen={this.state.isOpenClick}
          onToggle={this.handleToggleClick}
          trigger="click"
        >
          <div>123123</div>
          <div>456456</div>
        </Dropdown>
        <Dropdown text="Controled hover dropdown" isOpen={this.state.isOpenHover} onToggle={this.handleToggleHover}>
          <div>123123</div>
          <div>456456</div>
        </Dropdown>
      </React.Fragment>
    )
  }
}
