/* tslint:disable */

import * as React from 'react'
import { Menu, MenuItem } from '../../../src'

export default class Page extends React.Component {
  onChange(name: string) {
    console.log(name)
  }

  render() {
    return (
      <div>
        <Menu value="2" onChange={name => this.onChange(name)}>
          <MenuItem>
            图片及搜索
          </MenuItem>
          <MenuItem>
            购买及授权
          </MenuItem>
          <MenuItem>
            支付问题
          </MenuItem>
          <MenuItem>
            下载问题
          </MenuItem>
          <MenuItem>
            退款 / 退图
          </MenuItem>
          <MenuItem>
            关于账户
          </MenuItem>
          <MenuItem>
            相关流程
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
