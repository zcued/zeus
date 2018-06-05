import * as React from 'react'
import styled from '../theme/styled-components'
import { T, px } from '../util'
import { FlexRow } from '../globals'

export const FormContext = React.createContext({})

interface Props {
  width?: number | string
  className?: string
  style?: object
}

interface ControlProps {
  error?: boolean
  disabled?: boolean
  style?: object
  className?: string
}

const BaseForm: React.SFC<Props> = ({ children, ...rest }) => <form {...rest}>{children}</form>

export const Form = styled(BaseForm)`
  margin: 0 auto;
  width: ${props => (props.width ? px(props.width) : '100%')};
`

const BaseFormControl = styled(FlexRow)`
  position: relative;
  padding: ${T('spacing.sm')}px 0;
`

export const FormControl: React.SFC<ControlProps> = ({ error, className, style, children }) => (
  <FormContext.Provider value={{ error }}>
    <BaseFormControl className={className} style={style}>
      {children}
    </BaseFormControl>
  </FormContext.Provider>
)

export const FormLabel = styled.label`
  flex: none;
  display: inline-block;
  text-align: right;
  width: 98px;
  font-size: ${T('font.size.sm')}px;
  color: ${T('palette.stone')};
  margin-right: ${T('spacing.sm')}px;

  &::after {
    content: '：';
  }
`

const BaseFormHelperText = styled.span`
  color: ${T('palette.stone')};
  font-size: ${T('font.size.xs')}px;
  position: absolute;
  right: 0;
  bottom: -${T('spacing.xs')}px;

  &[data-error='true'] {
    color: ${T('palette.primary')};
  }
`

export const FormHelperText = ({ children }) => (
  <FormContext.Consumer>
    {(context: ControlProps) => <BaseFormHelperText data-error={context.error}>{children}</BaseFormHelperText>}
  </FormContext.Consumer>
)
