import * as React from 'react'

export default class MenuItem extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}
