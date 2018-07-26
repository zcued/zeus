import * as React from 'react'
import { Tooltip } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Tooltip placement="top" title={<div>alsdjalsdj</div>}>
          <span>12312123</span>
        </Tooltip>
        <Tooltip placement="top" title={<a href="/">asdfasdfasdf</a>}>
          <span>asdfasdfasdf</span>
        </Tooltip>
        <Tooltip placement="bottom-end" title={<a href="/">asdfasdfasdf</a>}>
          <span>asdfasdfasdf</span>
        </Tooltip>
        <Tooltip
          placement="right-start"
          title={
            <a href="/" target="_blank">
              asdfasdfasdf
            </a>
          }
        >
          <span>asdfasdfasdf</span>
        </Tooltip>
      </React.Fragment>
    )
  }
}
