import * as React from 'react'
import styled from 'styled-components'
import Icon from '../icon'
import { T } from '../util'

interface Props {
  type?: 'warning' | 'success' | 'info' | 'error'
  showIcon?: boolean
  title?: string | JSX.Element
}

const Alert: React.SFC<Props> = ({ type, showIcon, title, ...rest }) => (
  <div data-type={type} {...rest}>
    {showIcon ? <Icon glyph="warning" /> : null}
    {title}
  </div>
)

const StyledAlert = styled(Alert)`
  display: inline-block;
  color: ${T('palette.white')};
  align-self: flex-start;
  flex: none;
  border-radius: 100px;
  font-size: ${T('font.size.sm')}px;
  line-height: 20px;
  padding: ${T('spacing.xs')}px ${T('spacing.md')}px;
  background-color: ${T('palette.primary')};
  box-sizing: border-box;
  position: relative;
`

export default StyledAlert
