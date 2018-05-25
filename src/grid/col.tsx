import * as React from 'react'
import styled from '../theme/styled-components'
import GridContext from './gridContext'
import { px } from '../util'

interface Props {
  gutter?: number
  span?: number
  className?: string
}

const Col: React.SFC<Props> = ({ className, children }) => <div className={className}>{children}</div>

const ColStyled = styled(Col)`
  float: left;
  margin-bottom: ${props => (props.gutter ? px(props.gutter) : '')};
  padding: ${props => (props.gutter ? '0 ' + px(props.gutter / 2) : '')};
  width: ${props => (props.span ? props.span / 24 * 100 + '%' : '100%')};
  box-sizing: border-box;
`

const ColWithContext = props => {
  return (
    <GridContext.Consumer>
      {context => (
        <ColStyled {...props} {...context}>
          {props.children}
        </ColStyled>
      )}
    </GridContext.Consumer>
  )
}

export default ColWithContext
