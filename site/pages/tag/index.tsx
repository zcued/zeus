import * as React from 'react'
import { Tag } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Tag className="qwe">1111</Tag>
        <Tag className="qwe" checked={true}>
          1111
        </Tag>
      </div>
    )
  }
}
