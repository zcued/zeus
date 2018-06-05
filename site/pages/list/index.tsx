/* tslint:disable */

import * as React from 'react'
import { List, ListItem } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <List>
          <ListItem>图片及搜索</ListItem>
          <ListItem>购买及授权</ListItem>
          <ListItem>支付问题</ListItem>
          <ListItem>下载问题</ListItem>
          <ListItem>退款 / 退图</ListItem>
          <ListItem>关于账户</ListItem>
          <ListItem>相关流程</ListItem>
        </List>
      </div>
    )
  }
}
