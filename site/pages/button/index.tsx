import * as React from 'react'
import { Button } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Button primary={true}>button</Button>
        <Button className="hhh">button</Button>
      </div>
    )
  }
}
