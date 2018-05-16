import * as React from 'react'
import styled from '../theme/styled-components'

interface Props {
  columns: Array<Object>
  data: Array<Object>
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
  padding: 14px 24px;
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

const Table: React.SFC<Props> = ({ columns, data, className }) => (
  <TableWrapper className={className}>
    <TableHead>
      <Row>
        {columns.map((item: any, index: number) => (
          <TableHeadColumn key={item.key || index} style={{ textAlign: item.align, width: item.width ? item.width + 'px' : '' }}>
            {item.title}
          </TableHeadColumn>
        ))}
      </Row>
    </TableHead>
    <TableBody>
      {data.map((item: any) => (
        <Row key={item.key}>
          {columns.map((column: any, index: number) => (
            <Column key={column.key || index} style={{ textAlign: column.align, width: column.width ? column.width + 'px' : '' }}>
              {column.render ? column.render(item[column.dataIndex], column, index) : item[column.dataIndex]}
            </Column>
          ))}
        </Row>
      ))}
    </TableBody>
  </TableWrapper>
)

export default Table
