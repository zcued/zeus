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
      layout: require('./layout')
    },
    Nav: {
      tabs: require('./tabs')
    }
  }
}

export default routes
