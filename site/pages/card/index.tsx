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
            tag={<div style={{ background: '#ffd100' }}>hhh</div>}
            operator={<div>a</div>}
          />
        </Col>
        <Col span={6}>
          <Card
            imgSrc="http://ali.image.hellorf.com/images/c1a0d418041d136843dd8b581c33a41c.jpeg"
            imgAlt="baocuo"
            titlePosition="bottom"
            tag={<div style={{ background: '#ffd100' }}>hhh</div>}
            title="我是标题啊我是标题啊我是标题啊我是标题啊我是标题啊"
          />
        </Col>
        <Col span={6}>
          <Card
            borderStyle="1px solid #fff"
            customImage={
              <img
                style={{ padding: '10px', boxSizing: 'border-box' }}
                src="http://ali.image.hellorf.com/images/c1a0d418041d136843dd8b581c33a41c.jpeg"
                alt=""
              />
            }
            customContent={
              <div>
                <p>新建收藏夹</p>
                <p className="custom-hover">3张</p>
              </div>
            }
            titlePosition="bottom"
            tag={<div style={{ background: '#ffd100' }}>hhh</div>}
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
        <Col span={4}>
          <Card
            size="small"
            imgSrc="http://ali.image.hellorf.com/images/1b90734b946e92a5c24738bde66879f5.jpeg"
            title="我是标题啊"
            subTitle="此文案"
            tag={<div style={{ background: '#ffd100' }}>hhh</div>}
            operator={<div>a</div>}
          />
        </Col>
        <Col span={4}>
          <Card
            size="small"
            imgSrc="http://ali.image.hellorf.com/images/1b90734b946e92a5c24738bde66879f5.jpeg"
            imgAlt="baocuo"
            titlePosition="bottom"
            tag={<div style={{ background: '#ffd100' }}>hhh</div>}
            title="我是标题啊我是标题啊我是标题啊我是标题啊我是标题啊"
          />
        </Col>
        <Col span={4}>
          <Card
            size="small"
            type="atlas"
            title="我是标题啊"
            subTitle="此文案"
            operator={<Button>a</Button>}
            imgSrc="http://ali.image.hellorf.com/images/1b90734b946e92a5c24738bde66879f5.jpeg"
          />
        </Col>
        <Col span={4}>
          <Card
            size="small"
            type="album"
            title="音乐专辑"
            subTitle="qweqwe"
            imgSrc="http://ali.image.hellorf.com/images/1b90734b946e92a5c24738bde66879f5.jpeg"
          />
        </Col>
        <Col span={4}>
          <Card
            size="small"
            type="atlas"
            title="我是标题啊"
            subTitle="此文案"
            operator={<Button>a</Button>}
            imgSrc="http://ali.image.hellorf.com/images/1b90734b946e92a5c24738bde66879f5.jpeg"
          />
        </Col>
        <Col span={4}>
          <Card
            size="small"
            type="album"
            title="我是标题啊"
            subTitle="此文案"
            imgSrc="http://ali.image.hellorf.com/images/1b90734b946e92a5c24738bde66879f5.jpeg"
          />
        </Col>
      </Row>
    )
  }
}
