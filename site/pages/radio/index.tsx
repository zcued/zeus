/* tslint:disable */

import * as React from 'react'
import { Radio } from '../../../src'

export default class Page extends React.Component {
  state = {
    selected: null
  }

  changeRadioes = (e, checked) => {
    if (checked) {
      this.setState({
        selected: Number(e.target.value)
      })
    } else {
      this.setState({
        selected: null
      })
    }
  }

  render() {
    const { selected } = this.state
    const checkboxes = ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5']
    return (
      <div>
        <p>
          {checkboxes.map((item, index) => {
            console.log(selected)
            return (
              <Radio
                checked={index === selected}
                key={index}
                label={item}
                value={index}
                name='radio'
                onChange={this.changeRadioes}
              />
            )
          })}
        </p>
      </div>
    )
  }
}
