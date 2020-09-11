import * as React from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import { Provider } from '../../src'

import routes from './routes'

import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'

const StyledApp = styled.div`
  font-family: PingFangSC-Regular, 'Microsoft YaHei', '微软雅黑', sans-serif;
  font-size: 16px;
  line-height: 22px;
`

const StyledContainer = styled.div`
  background: #f0f4f5;
`

interface AppState {
  route: string
}

class App extends React.Component<{}, AppState> {
  components = null
  state = {
    route: null
  }

  constructor(props: any) {
    super(props)

    this.hashChangeCallback = this.hashChangeCallback.bind(this)
  }

  componentDidMount() {
    this.setRoute()
    window.addEventListener('hashchange', this.hashChangeCallback, false)
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.hashChangeCallback, false)
  }

  hashChangeCallback() {
    window.scrollTo(0, 0)

    this.setRoute()
  }

  getRoute() {
    const hashs: string[] = location.hash.split('/')

    if (hashs) {
      return hashs[1]
    }

    return 'quickStart'
  }

  setRoute() {
    this.setState({
      route: this.getRoute()
    })
  }

  getComponent(route: string) {
    this.components =
      this.components ||
      Object.assign(
        Object.values(routes.components).reduce((a, b) => {
          return Object.assign(a, b)
        }, {}),
        routes.documents
      )

    const component = this.components[route]

    if (component) {
      return React.createElement(component.default)
    }
  }

  render() {
    return (
      <Provider>
        <StyledApp className="app">
          <Header />
          <StyledContainer>
            <Menu routes={routes} />
            {this.getComponent(this.state.route)}
          </StyledContainer>
          <Footer />
        </StyledApp>
      </Provider>
    )
  }
}

export default hot(module)(App)
