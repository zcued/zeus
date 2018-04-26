import * as React from 'react'
import styled from '../theme/styled-components'

interface Props {
  head: Array<string>
}

const TableWrapper = styled.table`
  width: 100%;
  text-align: left;
  margin: 40px 0;
`

const TableHead = styled.thead`
  border-bottom: 2px solid rgba(20, 20, 20, 0.1);
`

export const Row = styled.tr`
  padding: 0 20px;
  padding-left: 0;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(20, 20, 20, 0.1);
  }
`

export const Column = styled.td`
  font-weight: normal;
  padding: 10px 12px;
  padding-left: 0;
`

const TableHeadColumn = Column.withComponent('th').extend`
  text-transform: uppercase;
  font-size: 85%;
  opacity: 0.8;
`

const Table: React.SFC<Props> = ({ head, children }) => (
  <TableWrapper>
    <TableHead>
      <tr>
        {head.map((text, i) => (
          <TableHeadColumn key={i} title={text}>
            {text}
          </TableHeadColumn>
        ))}
      </tr>
    </TableHead>
    <tbody>{children}</tbody>
  </TableWrapper>
)

export default Table
