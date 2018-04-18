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
  document: documentInterface;
  components: componentsInterface;
}

const routes: routesInterface = {
  document: {

  },
  components: {
    'Basic': {
      'button': require('./button'),
    }
  }
};

export default routes;
