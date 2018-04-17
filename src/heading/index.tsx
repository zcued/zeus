import * as React from 'react'
import styled from '../theme/styled-components'

interface HeadingProps {
  className?: string
  level?: number
  fontSize?: number
}

const H: React.SFC<HeadingProps> = ({ className, level, children }) =>
  React.createElement(`h${level}`, { className }, children)

const Heading = styled(H)`
  color: #000;
`

const [H1, H2, H3, H4, H5, H6] = [1, 2, 3, 4, 5, 6].map(i => ({ children, fontSize }) => (
  <Heading level={i} fontSize={fontSize}>
    {children}
  </Heading>
))

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
}
