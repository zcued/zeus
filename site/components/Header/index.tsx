import * as React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 100px;
  background: blue;
`

export default class Header extends React.Component {
  render() {
    return <StyledHeader>header</StyledHeader>
  }
}
