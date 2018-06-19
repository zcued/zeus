/* tslint:disable */

import * as React from 'react'
import { Select } from '../../../src'

export default class Page extends React.Component {
  state = {
    q_image_user_package_id: 'chocolate'
  }

  change = (option) => {
    this.setState({ q_image_user_package_id: option.value })
  }

  render() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
      <div style={{ padding: '20px' }}>
        <Select
          value={this.state.q_image_user_package_id}
          options={options}
          onChange={this.change}
        />
      </div>
    )
  }
}
