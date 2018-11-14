import * as React from 'react'
import styled, { css } from '../theme/styled-components'
import Flex from '../flex'
import { T } from '../util'

interface TabsProps {
  align?: 'start' | 'center' | 'end'
}

interface TabProps {
  selected?: boolean
}

const Tabs: React.SFC<TabsProps> = ({ children, align, ...rest }) => {
  return (
    <Flex {...rest} halign={align}>
      {children}
    </Flex>
  )
}

const Tab: React.SFC<TabProps> = ({ children, selected, ...rest }) => (
  <Flex {...rest} halign="center">
    {children}
  </Flex>
)

export const StyledTabs = styled(Tabs)`
  align-self: stretch;
  margin: 0 ${T('spacing.lg')}px;
  margin-top: ${T('spacing.sm')}px;
  align-items: stretch;
  min-height: ${T('spacing.xl')}px;
  height: ${T('spacing.xl')}px;
`

export const StyledTab = styled(Tab)`
  margin: 0 ${T('spacing.md')}px;
  text-align: center;
  line-height: 28px;
  font-size: ${T('font.size.md')}px;
  font-weight: ${props => (props.selected ? props.theme.font.weight.bold : props.theme.font.weight.normal)};
  color: ${T('palette.black')};
  cursor: pointer;
  position: relative;
  transition: color 0.3s;

  .icon {
    margin-right: ${T('spacing.xs')}px;
  }

  &:hover {
    color: ${T('palette.primary')};
  }

  ${props =>
    props.selected &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 40px;
        height: 4px;
        background: ${T('palette.primary')};
        transform: translateX(-50%);
      }
    `};
`
