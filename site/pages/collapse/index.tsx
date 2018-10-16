/* tslint:disable */

import * as React from 'react'
import { Collapse, CollapseItem } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Collapse value={['0', '1']} accordion={true}>
          <CollapseItem title="你们的图片可以做logo吗？">
            您购买的套餐有效期为1年
            <img src="http://seopic.699pic.com/photo/50052/7491.jpg_wh1200.jpg" alt="" />
          </CollapseItem>
          <CollapseItem title={<span>是否可以获取小图样</span>}>您购买的套餐有效期为1年</CollapseItem>
          <CollapseItem title="是否可以申请发票">您购买的套餐有效期为1年</CollapseItem>
        </Collapse>
      </div>
    )
  }
}
