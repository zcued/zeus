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
      badge: require('./badge'),
      button: require('./button'),
      heading: require('./heading'),
      grid: require('./grid'),
      card: require('./card'),
      carousel: require('./carousel'),
      cascader: require('./cascader'),
      tag: require('./tag'),
      collapse: require('./collapse'),
      menu: require('./menu'),
      icon: require('./icon'),
      checkbox: require('./checkbox'),
      radio: require('./radio'),
      tooltip: require('./tooltip'),
      toast: require('./toast'),
      table: require('./table'),
      modal: require('./modal'),
      list: require('./list'),
      form: require('./form'),
      datepicker: require('./datepicker'),
      select: require('./select'),
      upload: require('./upload')
    },
    Nav: {
      tabs: require('./tabs'),
      dropdown: require('./dropdown'),
      pagination: require('./pagination'),
      spinner: require('./spinner')
    }
  }
}

export default routes
