interface documentsInterface {
  [key: string]: {
    [key: string]: any
  }
}

interface componentsInterface {
  [key: string]: {
    [key: string]: any
  }
}

interface routesInterface {
  documents: documentsInterface
  components: componentsInterface
}

const routes: routesInterface = {
  documents: {},
  components: {
    Basic: {
      button: require('./button'),
      heading: require('./heading'),
      grid: require('./grid')
    },
    Nav: {
      tabs: require('./tabs')
    }
  }
}

export default routes
