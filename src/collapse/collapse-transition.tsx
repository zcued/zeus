import * as React from 'react'

export interface Props {
  isShow: boolean
}

export default class CollapseTransition extends React.Component<Props> {
  duration = 300
  panel: any = React.createRef()
  imgs: any = null
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
    this.imgs = this.panel.current.querySelectorAll('img') || []
    for (let i = 0; i < this.imgs.length; i++) {
      this.imgs[i].addEventListener('load', this.setHeight)
    }
  }

  componentWillUnmount() {
    for (let i = 0; i < this.imgs.length; i++) {
      this.imgs[i].removeEventListener('load', this.setHeight)
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
