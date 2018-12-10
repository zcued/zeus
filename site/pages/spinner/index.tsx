/* tslint:disable */

import * as React from 'react'
import { Spinner, Button } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Spinner color="#000" spinning={false} />
        </div>
        <div>
          <Spinner opacity={0.5} top={100} minHeight={500}>
            <div style={{ background: 'red' }}>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>
            <Button loading={true}>确认提交</Button>
          </Spinner>
        </div>
      </React.Fragment>
    )
  }
}
