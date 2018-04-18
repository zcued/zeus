import * as React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import { Provider } from '../../src';

import routes from './routes';

const StyledApp = styled.div`
  font-size: 24px;
`;

const StyledHeader = styled.div`
  height: 100px;
  background: blue;
`;

const StyledContainer = styled.div`
  height: 500px;
`;

const StyledMenu = styled.div`
  height: 200px;
  background: gray;
`;

const StyledFooter = styled.div`
  height: 300px;
  color: #fff;
  background: black;
`;

class App extends React.Component {
  render() {
    return (
      <Provider>
        <StyledApp className="app">
          <StyledHeader>header</StyledHeader>
          <StyledContainer>
            <StyledMenu>
              {
                Object.keys(routes.components).map(group => {
                  return (
                    <div key={group}>
                      <div>{group}</div>
                      {
                        Object.keys(routes.components[group]).map(component => {
                          return (
                            <a href={`#/${component}`} key={component}>{component}</a>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </StyledMenu>
            {
              React.createElement(routes.components.Basic.button.default)
            }
          </StyledContainer>
          <StyledFooter>footer</StyledFooter>
        </StyledApp>
      </Provider>
    )
  }
}

export default hot(module)(App);
