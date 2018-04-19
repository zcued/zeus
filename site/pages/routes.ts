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
      layout: require('./layout')
    }
  }
}

export default routes
