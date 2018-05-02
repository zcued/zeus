interface Documents {
  [key: string]: {
    [key: string]: any
  }
}

interface Components {
  [key: string]: {
    [key: string]: any
  }
}

interface Routes {
  documents: Documents
  components: Components
}

const routes: Routes = {
  documents: {},
  components: {
    Basic: {
      alert: require('./alert'),
      button: require('./button'),
      heading: require('./heading'),
      grid: require('./grid'),
      card: require('./card'),
      carousel: require('./carousel'),
      tag: require('./tag'),
      collapse: require('./collapse'),
      menu: require('./menu')
    },
    Nav: {
      tabs: require('./tabs'),
      dropdown: require('./dropdown'),
      pagination: require('./pagination')
    }
  }
}

export default routes
