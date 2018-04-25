/* tslint:disable */

import * as React from 'react'
import { Row, Col, Card, Button } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <Row gutter={24}>
        <Col span={6}>
          <Card
            imgSrc="http://ali.image.hellorf.com/images/1b90734b946e92a5c24738bde66879f5.jpeg"
            title="我是标题啊"
            subTitle="此文案"
            operator={<div>a</div>}
          />
        </Col>
        <Col span={6}>
          <Card
            imgSrc="http://ali.image.hellorf.com/images/1b90734b946e92a5c24738bde66879f5.jpeg"
            imgAlt="baocuo"
            titlePosition="bottom"
            title="我是标题啊我是标题啊我是标题啊我是标题啊我是标题啊"
          />
        </Col>
        <Col span={6}>
          <Card
            type="atlas"
            title="我是标题啊"
            subTitle="此文案"
            operator={<Button>a</Button>}
            imgSrc="http://ali.image.hellorf.com/images/1b90734b946e92a5c24738bde66879f5.jpeg"
          />
        </Col>
        <Col span={6}>
          <Card
            type="picture"
            title="我是标题啊"
            subTitle="此文案"
            imgSrc="http://ali.image.hellorf.com/images/1b90734b946e92a5c24738bde66879f5.jpeg"
          />
        </Col>
      </Row>
    )
  }
}
