import * as React from 'react'

export default class Menu extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}
