import * as React from 'react'
import styled from '../theme/styled-components'
import { FlexRow } from '../globals'
import Icon from '../icon'
import { T } from '../util'

interface TagProps {
  type?: 'hot' | 'defalut'
  color?: string
  dotColor: string
  checked?: boolean
  children?: any
}

const TagWraper = FlexRow.extend`
  position: relative;
  overflow: hidden;

  &[data-type='hot']::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${T('palette.secondary')};
    right: -10px;
    top: -10px;
  }

  &[aria-checked='true'] > span:first-child {
    background: ${T('palette.primary')};
    color: ${T('palette.white')};
  }
`

const StyledTag = styled.span`
  background: ${props => props.color || '#F0F4F5'};
  color: ${T('palette.black')};
  padding: 9px;
  line-height: 22px;
`

const LeftRadiusTag = StyledTag.extend`
  padding-left: 34px;
  padding-right: 20px;
  position: relative;
  border-radius: 100px 0 0 100px;
`

const Dot: React.SFC<{ dotColor?: string }> = props => <span {...props} />

const StyledDot = styled(Dot)`
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.dotColor || 'white'};
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 1px;
  right: -13px;
  color: ${T('palette.white')};
`

export default ({ children, type, checked, dotColor, ...rest }: TagProps) => (
  <TagWraper data-type={checked ? '' : type} aria-checked={checked}>
    <LeftRadiusTag {...rest}>{children}</LeftRadiusTag>
    <StyledDot dotColor={dotColor} />
    {checked && <StyledIcon glyph="tag-close" />}
  </TagWraper>
)
