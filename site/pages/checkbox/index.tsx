/* tslint:disable */

import * as React from 'react'
import { Checkbox } from '../../../src'

export default class Page extends React.Component {
  state = {
    checked: ['关键词1', '关键词2'],
    selected: null
  }

  changeCheckbox = (e, checked) => {
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

  changeCheckboxes = (e, checked) => {
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
    const { checked, selected } = this.state
    const keyWords = ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5']
    const checkboxes = ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5']

    return (
      <div>
        {keyWords.map((item, index) => {
          return (
            <Checkbox
              checked={checked.indexOf(item) > -1}
              disabled={true}
              key={index}
              label={item}
              value={item}
              onChange={this.changeCheckbox}
            />
          )
        })}
        <p>
          {checkboxes.map((item, index) => {
            console.log(selected)
            return (
              <Checkbox
                checked={index === selected}
                key={index}
                label={item}
                value={index}
                onChange={this.changeCheckboxes}
              />
            )
          })}
        </p>
      </div>
    )
  }
}
