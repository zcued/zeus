import * as React from 'react'
import styled from '../theme/styled-components'
import { noop } from '../globals'
import Icon from '../icon'
import { T } from '../util'

interface TagProps {
  type?: 'hot' | 'default'
  color?: string
  dotcolor?: string
  checked?: boolean
  children?: any
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const TagWraper = styled.div`
  display: inline-flex;
  align-items: center;
  max-height: 38px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

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
  background: ${props => props.color || props.theme.palette.daisy};
  color: ${T('palette.black')};
  padding: ${T('spacing.xs')}px;
  line-height: 22px;
  transition: color 0.3s;

  &:hover {
    color: ${T('palette.primary')};
  }
`

const LeftRadiusTag = StyledTag.extend`
  padding-left: 34px;
  padding-right: 20px;
  position: relative;
  border-radius: 100px 0 0 100px;
`

const Dot: React.SFC<{ dotcolor?: string }> = props => <span {...props} />

const StyledDot = styled(Dot)`
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.dotcolor || 'white'};
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 1px;
  right: -13px;
  color: ${T('palette.white')};
`

export default ({ className, children, type = 'default', checked, dotcolor, onClick = noop, ...rest }: TagProps) => (
  <TagWraper data-type={checked ? '' : type} aria-checked={checked} className={className} onClick={onClick}>
    <LeftRadiusTag {...rest}>{children}</LeftRadiusTag>
    <StyledDot dotcolor={dotcolor} />
    {checked && <StyledIcon glyph="tag-close" onClick={onClick} />}
  </TagWraper>
)
