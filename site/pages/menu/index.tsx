/* tslint:disable */

import * as React from 'react'
import { Menu, SubMenu, MenuItem } from '../../../src'

export default class Page extends React.Component {
  onChange(name: string) {
    console.log(name)
  }

  onOpenChange(name: string) {
    console.log('open', name)
  }

  render() {
    return (
      <div>
        <Menu
          hasActiveArrow={true}
          activeArrowPosition={20}
          align="left"
          value="2-1"
          onChange={name => this.onChange(name)}
          onOpenChange={name => this.onOpenChange(name)}
        >
          <MenuItem>图片及搜索</MenuItem>
          <MenuItem>购买及授权</MenuItem>
          <SubMenu title="我的订单">
            <MenuItem>图片</MenuItem>
            <MenuItem>发票管理</MenuItem>
          </SubMenu>
          <MenuItem>支付问题</MenuItem>
          <MenuItem>下载问题</MenuItem>
          <SubMenu title="我的订单">
            <MenuItem>图片</MenuItem>
            <MenuItem>发票管理</MenuItem>
          </SubMenu>
          <MenuItem>退款 / 退图</MenuItem>
          <MenuItem>关于账户</MenuItem>
          <MenuItem>相关流程</MenuItem>
        </Menu>
      </div>
    )
  }
}
