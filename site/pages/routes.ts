interface documentInterface {
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
<<<<<<< HEAD
  document: documentInterface;
  components: componentsInterface;
}

const routes: routesInterface = {
  document: {

  },
  components: {
    'Basic': {
      'button': require('./button'),
      'layout': require('./layout'),
    }
  }
};

export default routes;
=======
  document: documentInterface
  components: componentsInterface
}

const routes: routesInterface = {
  document: {},
  components: {
    Basic: {
      button: require('./button'),
      layout: require('./layout')
    }
  }
}

export default routes
>>>>>>> af902054ab9755896896e2a7d5799ef978961507
