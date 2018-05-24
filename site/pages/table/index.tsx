import * as React from 'react'
import styled from 'styled-components'
import { Table } from '../../../src'

const Span = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.black};
`

const SpanDisabled = styled.span`
  color: ${({ theme }) => theme.palette.stone};
`

const TableStyled = styled(Table)`
  margin-top: 20px;
`

export default class Page extends React.Component {
  render() {
    const columns = [{
      key: '1',
      title: '用途限制',
      dataIndex: 'use',
    }, {
      key: '2',
      title: '标准授权',
      dataIndex: 'standard',
      align: 'center',
      width: 206,
      render: (text) => {
        return text === '不允许' ? <SpanDisabled>{text}</SpanDisabled> : <Span>{text}</Span>
      }
    }, {
      key: '3',
      title: '扩展授权',
      dataIndex: 'extend',
      align: 'center',
      width: 206,
      render: (text, record) => {
        return text === '不允许' ? <SpanDisabled>{record.extend}</SpanDisabled> : <Span>{text}</Span>
      }
    }]

    const data = [{
      key: 1,
      use: '数字用途：网站、微博、微信、电邮等',
      standard: '允许',
      extend: '允许'
    }, {
      key: 2,
      use: '线下印刷：宣传页、海报、报纸杂志、包装等',
      standard: '限量50万份',
      extend: '印刷数量无限'
    }, {
      key: 3,
      use: '户外广告：楼宇、车身、灯箱、围挡、橱窗、户外广告等',
      standard: '不允许',
      extend: '允许'
    }]

    return (
      <React.Fragment>
        <div style={{ padding: '10px', background: '#fff' }}>
          <TableStyled columns={columns} data={data} />
        </div>
      </React.Fragment>
    )
  }
}
