import * as React from 'react'
import { Table } from '../../../src'

export default class Page extends React.Component {
  render() {
    const head = ['用途限制', '标准授权', '扩展授权']

    return (
      <React.Fragment>
        <Table head={head}>
          <tr>
            <td>数字用途：网站、微博、微信、电邮等</td>
            <td>允许</td>
            <td>扩展授权</td>
          </tr>
        </Table>
      </React.Fragment>
    )
  }
}
