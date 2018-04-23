/* tslint:disable */

import * as React from 'react'
import { Row, Col } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Row className="hhh">asdkfj</Row>
        <Row gutter={40}>
          <Col span={4}>1</Col>
          <Col span={4}>2</Col>
          <Col span={4}>3</Col>
          <Col span={4}>4</Col>
          <Col span={4}>5</Col>
          <Col span={4}>6</Col>
          <Col>dadfda</Col>
        </Row>

        <div style={{background: 'blue'}}>
          <div>
            <div style={{display: 'inline-block', position: 'relative', background: 'inherit',}}>
              <span style={{
                position: 'absolute',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'inherit',
              }}></span>
              <div style={{ display: 'inline-block', padding: '10px 20px 10px 40px', background: 'red', borderRadius: '50% 0 0 50%' }}>
                <span>tags</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
