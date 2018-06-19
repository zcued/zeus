import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${T('spacing.xs')}px 0;
`

export const ListItem = styled.li`
  text-align: center;
  white-space: nowrap;
  padding: ${T('spacing.xs')}px 0;
  overflow: hidden;

  &:hover {
    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => theme.palette.primary};
  }
`
