# Zeus

![](https://travis-ci.org/zcued/zeus.svg?branch=master)
![](https://img.shields.io/github/license/zcued/zeus.svg)
![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

## Getting Started

A Simple and elegant component-based UI library

### Installation

```sh
npm i zeus-ui
```

### Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, Button } from 'zeus-ui'

const App = () => (
  <Provider>
    <div>
      <h1>Hello Zeus-ui</h1>
      <Button>Click me</Button>
    </div>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
```

#### [👉 Click here 👈](https://zcued.github.io/zeus-doc/dist) for more information.

### Feedback

Issues or feature requests can be created on [our GitHub page ](https://github.com/zcued/zeus/issues)

### Browser Support

All [browsers that React supports](https://reactjs.org/docs/react-dom.html#browser-support) are supported.

### Contributing

Before opening an issue or pull request, please read the [Contributing guide](https://github.com/zcued/zeus/blob/master/CONTRIBUTING.md).
