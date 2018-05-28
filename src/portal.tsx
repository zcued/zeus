import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface Props {
  container?: object | Function
  onRendered?: () => void
}

function getContainer(container: object | Function, defaultContainer: HTMLElement) {
  container = typeof container === 'function' ? container() : container
  return ReactDOM.findDOMNode(container) || defaultContainer
}

function getOwnerDocument(element: any) {
  const node = ReactDOM.findDOMNode(element)
  return (node && node.ownerDocument) || document
}

class Portal extends React.Component<Props> {
  mountNode: HTMLElement

  componentDidMount() {
    this.setContainer(this.props.container)
    this.forceUpdate(this.props.onRendered)
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.container !== this.props.container) {
      this.setContainer(this.props.container)
      this.forceUpdate()
    }
  }

  componentWillUnmount() {
    this.mountNode = null
  }

  setContainer(container: object | Function) {
    this.mountNode = getContainer(container, getOwnerDocument(this).body)
  }

  getMountNode = () => {
    return this.mountNode
  }

  render() {
    const { children } = this.props

    return this.mountNode ? ReactDOM.createPortal(children, this.mountNode) : null
  }
}

export default Portal
