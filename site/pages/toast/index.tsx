import * as React from 'react'
import { Toast } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <Toast offsetLeft={-500} offsetTop={-300}>
        this is a toast
      </Toast>
    )
  }
}
