import * as React from 'react'

export interface Props {
  isShow: boolean
}

export default class CollapseTransition extends React.Component<Props> {
  duration = 300
  panel: any = React.createRef()

  state = {
    height: 0,
    panelHeight: 0
  }

  static getDerivedStateFromProps = (nextProps: any, preState: any) => {
    if (!!nextProps.isShow) {
      return { height: preState.panelHeight || 'auto' }
    }
    if (!nextProps.isShow) {
      return { height: 0 }
    }
    return preState
  }

  setHeight() {
    const { isShow } = this.props
    this.state.panelHeight = this.panel.current.offsetHeight
    if (isShow) {
      this.setState({ height: this.state.panelHeight })
    }
  }

  componentDidMount() {
    this.setHeight()
    const imgs = this.panel.current.querySelector('img') || []

    const self = this
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('load', () => self.setHeight())
    }
  }

  render() {
    const { height } = this.state
    return (
      <div
        className="collapse-transition"
        style={{ overflow: 'hidden', transition: `all ease ${this.duration / 1000}s`, height }}
      >
        <div ref={this.panel}>{this.props.children}</div>
      </div>
    )
  }
}
