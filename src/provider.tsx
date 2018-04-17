import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/default'

const Provider = props => (
  <ThemeProvider theme={Object.assign({}, theme, props.theme)}>{props.children}</ThemeProvider>
)

export default Provider
