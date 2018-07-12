import * as React from 'react'
import styled from '../theme/styled-components'

type Align = 'left' | 'right' | 'center'

export interface Col {
  dataIndex: string
  key?: string
  render?: (text: string, record: any, index: number) => any
  align?: Align
  width?: string | number
  title?: string | React.ReactNode
}

export interface Props {
  columns: Array<Col>
  data?: Array<{
    key: string | number
    [key: string]: any
  }>
  onColumnClick?: (record: any) => void
  className?: string
}

const TableWrapper = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 0;
`

const TableHead = styled.thead`
  color: ${({ theme }) => theme.palette.white};
  background: #2e3139;
`

const TableBody = styled.tbody`
  color: ${({ theme }) => theme.palette.spruce};
  background: ${({ theme }) => theme.palette.white};
`

export const Row = styled.tr`
  &:nth-child(even) {
    background: ${({ theme }) => theme.palette.daisy};
  }
`

export const Column = styled.td`
  padding: 14px 16px;
  border-left: 2px solid ${({ theme }) => theme.palette.daisy};
  border-bottom: 2px solid ${({ theme }) => theme.palette.daisy};
  box-sizing: border-box;

  &:last-child {
    border-right: 2px solid ${({ theme }) => theme.palette.daisy};
  }
`

const TableHeadColumn = Column.withComponent('th').extend`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border-color: #2e3139;

  &:last-child {
    border-color: #2e3139;
  }
`

const getStyleFromCol = (column: Col): object => {
  const { align, width } = column

  let style: { textAlign?: Align; width?: string | number } = {}

  if (['left', 'right', 'center'].indexOf(align) > -1) {
    style.textAlign = align
  }

  if (width) {
    style.width = width
  }

  return style
}

const Table: React.SFC<Props> = ({ columns, data, onColumnClick, className }) => {
  return (
    <TableWrapper className={className}>
      <TableHead>
        <Row>
          {columns.map((column, idx: number) => (
            <TableHeadColumn key={column.key || idx} style={getStyleFromCol(column)}>
              {column.title}
            </TableHeadColumn>
          ))}
        </Row>
      </TableHead>
      {data &&
        data.length > 0 && (
          <TableBody>
            {data.map((item, index: number) => (
              <Row
                key={index}
                onClick={() => onColumnClick && onColumnClick(item)}
                style={{ cursor: onColumnClick ? 'pointer' : '' }}
              >
                {columns.map((column, idx: number) => (
                  <Column key={column.key || idx} style={getStyleFromCol(column)}>
                    {column.render ? column.render(item[column.dataIndex], item, index) : item[column.dataIndex]}
                  </Column>
                ))}
              </Row>
            ))}
          </TableBody>
        )}
    </TableWrapper>
  )
}

export default Table
