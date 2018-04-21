import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'
import { FlexRow } from '../globals'

export const StyledTabs = styled(FlexRow)`
  align-self: stretch;
  margin: 0 32px;
  margin-top: 16px;
  align-items: stretch;
  min-height: 48px;
  @media (max-width: 768px) {
    background-color: ${T('palette.white')};
    align-self: stretch;
    margin: 0;
    margin-bottom: 2px;
  }
`

interface TabProp {
  selected?: boolean
}

const Tab: React.SFC<TabProp> = ({ children, ...rest }) => <FlexRow {...rest}>{children}</FlexRow>

export const StyledTab = styled(Tab)`
  margin: 8px 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1;
  font-size: 20px;
  font-weight: ${props => (props.selected ? props.theme.font.weight.medium : props.theme.font.weight.normal)};
  color: ${T('palette.black')};
  cursor: pointer;
  position: relative;
  box-shadow: inset 0 -4px 0 ${props => (props.selected ? props.theme.palette.primary : 'transparent')};
  .icon {
    margin-right: 8px;
  }

  &:hover {
    color: ${T('palette.primary')};
  }

  @media (max-width: 768px) {
    flex: auto;
    justify-content: center;
    margin-top: 32px;
    text-align: center;
    .icon {
      margin-right: 0;
    }
  }
`
