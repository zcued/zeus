/* tslint:disable */

import * as React from 'react'
import { Menu, MenuItem } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Menu>
          <MenuItem>
            您购买的套餐有效期为1年
          </MenuItem>
          <MenuItem>
            您购买的套餐有效期为1年
          </MenuItem>
          <MenuItem>
            您购买的套餐有效期为1年
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
