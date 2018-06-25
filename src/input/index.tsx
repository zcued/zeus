import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'
import { FormContext } from '../form'

interface Props {
  error?: boolean
}

const BaseInput = styled.input.attrs({
  type: 'text'
})`
  width: 100%;
  box-sizing: border-box;
  color: ${T('palette.black')};
  background: ${T('palette.white')};
  border: 1px solid ${T('palette.frost')};
  font-size: ${T('font.size.sm')}px;
  padding: ${T('spacing.xs')}px ${T('spacing.sm')}px;
  cursor: ${({ readOnly }) => (readOnly ? 'not-allowed' : 'auto')};
  transition: border-color 0.25s, box-shadow 0.25s;

  &::-webkit-input-placeholder {
    color: ${T('palette.stone')};
  }

  &:focus,
  &[data-error='true'] {
    border-color: ${T('palette.primary')};
    box-shadow: 0px 0px 0 1px ${T('palette.primary')};
    outline: none;
  }
`

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <FormContext.Consumer>{(context: Props) => <BaseInput {...props} data-error={context.error} />}</FormContext.Consumer>
)

export default Input
