import * as React from 'react'
import styled from '../theme/styled-components'

const Select = styled.select`
width:200px;
`

interface Props {
  options: object[],
  value?: any
}

// interface Option {
//   value: any,
//   label: any,
//   key?: any
// }

class Select2 extends React.Component<Props> {

  state = {
    destroy: false,
    value: 9,
  }

  onChange = (e) => {
    let value
    if (e && e.target) {
      value = e.target.value
    } else {
      value = e
    }
    this.setState({
      value,
    })
  }

  render() {
    const {options = []} = this.props
    return(
      <div>
        <Select
          value={this.state.value}
          onChange={this.onChange}
        >
          {
            options && options.map(item => (
              <option 
                key={item.key}
                value={item.value}
              >
              {item.label}
              </option>
            ))
          }
          <option value="01">jack</option>
          <option value="11">lucy</option>
          <option value="31">yiminghe</option>
        </Select>
      </div>
    )
  }
}

export default Select2