import styled, { css } from '../theme/styled-components'
import { T } from '../util'

export const fontFamily = css`
  font-family: ${T('font.family')};
`

export const Truncate = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  min-width: 0;
`

export const Flex = styled.div`
  display: flex;
`

export const FlexRow = Flex.extend`
  align-items: center;
`

export const FlexCol = Flex.extend`
  flex-direction: column;
  align-items: stretch;
`

export const Span = styled.span`
  color: ${T('palette.black')};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`

export const Label = Flex.extend`
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  font-weight: ${T('font.weight.medium')};
  font-size: 0.875rem;
  letter-spacing: -0.4px;
`
