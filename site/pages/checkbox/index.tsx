/* tslint:disable */

import * as React from 'react'
import { Checkbox } from '../../../src'

export default class Page extends React.Component {
  state = {
    checked: ['关键词1', '关键词2']
  }

  changeCheckbox = (checked, e) => {
    if (checked) {
      this.state.checked.push(e.target.value)
      this.setState({
        checked: this.state.checked
      })
    } else {
      const index = this.state.checked.indexOf(e.target.value)

      this.state.checked.splice(index, 1)
      this.setState({
        checked: this.state.checked
      })
    }
  }

  render() {
    const { checked } = this.state
    const keyWords = ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5']
    console.log(this.state.checked)

    return (
      <div>
        {keyWords.map((item, index) => {
          return (
            <Checkbox
              checked={checked.includes(item)}
              key={index}
              label={item}
              value={item}
              disabled={checked.length >= 2 && !checked.includes(item)}
              onChange={this.changeCheckbox}
            />
          )
        })}
      </div>
    )
  }
}
