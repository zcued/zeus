import styled from '../theme/styled-components'
import Input from '../input'
import { T } from '../util'

export const JumperInput = styled(Input)`
  width: 56px;
  height: 100%;
  border: none;
  border-bottom: 2px solid ${T('palette.black')};
  text-align: center;
  font-size: ${T('font.size.sm')}px;
  padding: 0;

  &:focus {
    border-color: ${T('palette.black')};
    box-shadow: none;
    outline: none;
  }
`

export const UL = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  margin: 0;
  font-size: ${T('font.size.sm')}px;
  & > li:last-child {
    color: ${T('palette.spruce')};
    letter-spacing: 0;
    text-align: center;
  }

  & > li[role] {
    cursor: pointer;
  }
`

export const LI = styled.li`
  height: 24px;
  display: flex;
  align-items: center;
  & > button {
    cursor: inherit;
    border: none;
    outline: none;
    height: 100%;
    line-height: 1;
    background: transparent;
    margin: 0 ${T('spacing.sm')}px;
    padding: 0;
  }
`

export const Count = styled.span`
  color: ${T('palette.black')};
  margin: 0 4px;
`
