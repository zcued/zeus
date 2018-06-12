import * as React from 'react'
import { Select, Select2 } from '../../../src'

interface State {
    value: any
}
const opts = [
    {
        label: '1',
        value: 'demo1'
    },
    {
        label: '2',
        value: 'demo2'
    },
    {
        label: '3',
        value: 'demo3'
    }
]

const opts2 = [
    {
      key: 1,
      value: '1',
      label: 'demo1'
    },
    {
      key: 2,
      value: '2',
      label: 'demo2'
    }
  ]

export default class Page extends React.Component<State> {

    state = {
        value: null
      }
    handleChange = (item) => {
        this.setState({
            value: item
        })
    }

    render() {
        const {value} = this.state

        return(
            <>
            <div
             style={{
                width: '200px',
             }}
            >
                <Select
                    placeholder="请选择"
                    value={value}
                    onChange={this.handleChange}
                    options={opts}
                />

                <Select2
                    options={opts2}
                    
                />
            </div>
            
            </>
        )
    }
}