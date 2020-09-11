/* tslint:disable */

import * as React from 'react'
import { Cascader } from '../../../src'
import area from './area'

export default class Page extends React.Component {
  state = {
    value: []
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  }

  render() {
    const { value } = this.state
    const options = area

    return (
      <div style={{ background: '#364d79', height: '160px' }}>
        <Cascader
          options={options}
          value={value}
          placeholder="请选择省 / 市 / 区"
          level={3}
          title={['省', '市', '区/县']}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
