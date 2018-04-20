import * as React from 'react'
import styled from '../theme/styled-components'

const ColStyled = styled.div`
  display: flex;
`

interface ColProps {

}

class Col extends React.Component<ColProps, {}> {
  constructor(props: ColProps) {
    super(props)
  }

  render() {
    return <ColStyled {...this.props}>{this.props.children}</ColStyled>
  }
}

export default Col
