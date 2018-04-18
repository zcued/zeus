import * as React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import { Provider } from '../../src';

import routes from './routes';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const StyledApp = styled.div`
  font-size: 24px;
`;

const StyledContainer = styled.div`
  height: 500px;
`;

class App extends React.Component {
  render() {
    return (
      <Provider>
        <StyledApp className="app">
          <Header />
          <StyledContainer>
            <Menu routes={routes} />
            {
              React.createElement(routes.components.Basic.button.default)
            }
          </StyledContainer>
          <Footer />
        </StyledApp>
      </Provider>
    )
  }
}

export default hot(module)(App);
