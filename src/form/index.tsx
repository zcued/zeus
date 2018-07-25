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
  label?: string | JSX.Element
  labelWidth?: number
  require?: boolean
  helper?: string
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
  align-items: flex-start;
  position: relative;
  padding: ${T('spacing.sm')}px 0;
`

const FormLabel = styled.label`
  flex: none;
  display: inline-block;
  text-align: right;
  width: 96px;
  font-size: ${T('font.size.sm')}px;
  color: ${T('palette.stone')};
  margin-right: ${T('spacing.sm')}px;
  line-height: 32px;
  &[data-require='true']::before {
    content: '*';
    display: inline-block;
    margin-right: 4px;
    color: ${T('palette.primary')};
  }

  &::after {
    content: '：';
  }
`

const FormHelperText = styled.span`
  color: ${T('palette.stone')};
  font-size: ${T('font.size.xs')}px;
  position: absolute;
  left: 112px;
  bottom: -4px;

  &[data-error='true'] {
    color: ${T('palette.primary')};
  }
`

const FormControlStyled: React.SFC<ControlProps> = ({ error, className, style, label, require, helper, children }) => (
  <FormContext.Provider value={{ error }}>
    <BaseFormControl className={className} style={style}>
      {label && <FormLabel data-require={require}>{label}</FormLabel>}
      {children}
      {helper && <FormHelperText data-error={error}>{helper}</FormHelperText>}
    </BaseFormControl>
  </FormContext.Provider>
)

export const FormControl = styled(FormControlStyled)`
  > label {
    width: ${({ labelWidth }) => (labelWidth ? labelWidth + 'px' : '')};
  }

  > span {
    left: ${({ label, labelWidth }) => (label ? (labelWidth ? labelWidth + 16 + 'px' : '') : 0)};
  }
`
