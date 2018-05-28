import * as React from 'react'
import styled from 'styled-components'

const StyledMenu = styled.header`
  height: 200px;
  background: gray;
`

interface MenuProps {
  routes: any
}

export default class Menu extends React.Component<MenuProps, {}> {
  constructor(props: MenuProps) {
    super(props)
  }

  render() {
    return (
      <StyledMenu>
        {Object.keys(this.props.routes.components).map(group => {
          return (
            <div key={group}>
              <div>{group}</div>
              {Object.keys(this.props.routes.components[group]).map(component => {
                return (
                  <a style={{ padding: '10px' }} href={`#/${component}`} key={component}>
                    {component}
                  </a>
                )
              })}
            </div>
          )
        })}
      </StyledMenu>
    )
  }
}
