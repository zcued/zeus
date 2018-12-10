import * as React from 'react'
import { Tooltip } from '../../../src'
import styled from '../../../src/theme/styled-components'

const Title = styled.div`
  color: pink;
`

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Tooltip placement="top" title={<Title>顶部默认显示</Title>} overlayReset={true} defaultHovering={true}>
          <span>顶部默认显示</span>
        </Tooltip>
        <Tooltip placement="top" title={<a href="/">顶部</a>}>
          <span>顶部</span>
        </Tooltip>
        <Tooltip placement="bottom-end" title={<a href="/">右下</a>}>
          <span>右下</span>
        </Tooltip>
        <Tooltip
          placement="right-start"
          mouseEnterDelay={500}
          title={
            <a href="/" target="_blank">
              延迟500s显示
            </a>
          }
        >
          <span>延迟500s显示</span>
        </Tooltip>
      </React.Fragment>
    )
  }
}
