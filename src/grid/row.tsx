import * as React from 'react'
import styled from '../theme/styled-components'
import { px } from '../util'

interface RowProps {
  gutter?: number
  className?: string
}

class Row extends React.Component<RowProps, {}> {
  constructor(props: RowProps) {
    super(props)
  }

  getChildContext() {
    return {
      gutter: this.props.gutter
    }
  }

  render() {
    const { children, gutter, ...rest } = this.props

    return <div {...rest}>{children}</div>
  }
}

// const Row: React.SFC<RowProps> = ({ children, ...rest}) => {
//   return <div {...rest}>{children}</div>
// }

const RowStyled = styled(Row)`
  display: flex;
  margin: ${props => props.gutter ? '0 -' + px(props.gutter / 2) : ''};
`

export default RowStyled
