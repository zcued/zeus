import * as React from 'react'
import { Alert } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Alert title="qweqwe" />
        <Alert title="qweqwe" showIcon={true} />
      </React.Fragment>
    )
  }
}
