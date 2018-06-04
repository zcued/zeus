import * as React from 'react'
import styled, { css } from '../theme/styled-components'
import { T } from '../util'
import { FlexRow } from '../globals'

export const StyledTabs = styled(FlexRow)`
  align-self: stretch;
  margin: 0 ${T('spacing.lg')}px;
  margin-top: ${T('spacing.sm')}px;
  align-items: stretch;
  min-height: ${T('spacing.xl')}px;
`

interface TabProps {
  selected?: boolean
}

const Tab: React.SFC<TabProps> = ({ children, selected, ...rest }) => (
  <FlexRow data-selected={selected} {...rest}>
    {children}
  </FlexRow>
)

export const StyledTab = styled(Tab)`
  margin: 0 ${T('spacing.md')}px;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  line-height: 28px;
  font-size: ${T('font.size.md')}px;
  font-weight: ${props => (props.selected ? props.theme.font.weight.medium : props.theme.font.weight.normal)};
  color: ${T('palette.black')};
  cursor: pointer;
  position: relative;
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
    `}
  }
`
