import * as React from 'react'
import { Badge } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Badge>3</Badge>
        <Badge>99</Badge>
        <Badge pill={true}>99+</Badge>
        <Badge pill={true} size={12}>
          302
        </Badge>
      </div>
    )
  }
}
