/* tslint:disable */

import * as React from 'react'
import { Spinner } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Spinner color="#000" spinning={false} />
        </div>
        <div>
          <Spinner opacity={0.8} top={100} backgroundColor="blue">
            <div style={{ background: 'red' }}>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>
          </Spinner>
        </div>
      </React.Fragment>
    )
  }
}
