import * as React from 'react'
import styled from '../theme/styled-components'
import GridContext from './gridContext'
import { px } from '../util'

interface RowProps {
  gutter?: number
  className?: string
}

class Row extends React.Component<RowProps, {}> {
  constructor(props: RowProps) {
    super(props)
  }

  render() {
    const { children, gutter, className } = this.props

    return (
      <GridContext.Provider value={{ gutter: gutter }}>
        <div className={className}>{children}</div>
      </GridContext.Provider>
    )
  }
}

const RowStyled = styled(Row)`
  margin: ${props => props.gutter ? '0 -' + px(props.gutter / 2) : ''};

  &::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
  }
`

export default RowStyled
