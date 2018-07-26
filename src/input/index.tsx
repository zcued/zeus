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
  padding: 0 ${T('spacing.sm')}px;
  width: 100%;
  height: 32px;
  font-size: ${T('font.size.sm')}px;
  color: ${T('palette.black')};
  background: ${T('palette.white')};
  border: 1px solid ${({ theme }) => theme.palette.black16};
  box-sizing: border-box;
  cursor: ${({ readOnly }) => (readOnly ? 'not-allowed' : 'auto')};
  transition: border-color 0.25s, box-shadow 0.25s;

  &::-webkit-input-placeholder {
    color: ${T('palette.stone')};
  }

  &:focus {
    border-color: ${({ theme }) => theme.palette.black30};
    outline: none;
  }

  &[data-error='true'] {
    border-width: 2px;
    border-color: ${T('palette.primary')};
    box-shadow: 0 2px 6px 0 ${({ theme }) => theme.palette.black16};
    outline: none;
  }
`

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <FormContext.Consumer>{(context: Props) => <BaseInput {...props} data-error={context.error} />}</FormContext.Consumer>
)

export default Input
