import * as React from 'react'
import styled from '../theme/styled-components'
import Icon from '../icon'
import { T } from '../util'

export interface Props {
  type?: 'warning' | 'success' | 'info' | 'error'
  showIcon?: boolean
  iconSize?: number
  title?: string | JSX.Element
}

const Alert: React.SFC<Props> = ({ type, showIcon = true, iconSize = 12, title, ...rest }) => (
  <div data-type={type} {...rest}>
    {showIcon ? <Icon glyph="warning" size={iconSize} /> : null}
    {title}
  </div>
)

const StyledAlert = styled(Alert)`
  display: inline-flex;
  align-items: center;
  color: ${T('palette.white')};
  flex: none;
  border-radius: 100px;
  font-size: ${T('font.size.sm')}px;
  padding: ${T('spacing.xs')}px ${T('spacing.md')}px;
  background-color: ${T('palette.primary')};
  box-sizing: border-box;
  position: relative;
  line-height: 1;

  & > div[data-icon='true'] {
    margin-right: ${T('spacing.xs')}px;
  }
`

export default StyledAlert
