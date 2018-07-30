import * as React from 'react'

export interface Props {
  isShow: boolean
}

export default class CollapseTransition extends React.Component<Props> {
  duration = 300
  panel: any = React.createRef()
  panelHeight: string | number = 'auto'
  imgs: any = null

  state = {
    height: 0
  }

  setHeight = () => {
    return (this.panelHeight = this.panel.current.offsetHeight)
  }

  // 重新加载高度，在有图片的时候，需要等待图片加载完毕重新加载高度
  reloadHeight = () => {
    this.setHeight()
    this.setState({ height: this.panelHeight })
  }

  componentDidMount() {
    this.setHeight()
    this.imgs = this.panel.current.querySelectorAll('img') || []
    for (let i = 0; i < this.imgs.length; i++) {
      this.imgs[i].addEventListener('load', this.reloadHeight)
    }
  }

  componentWillUnmount() {
    for (let i = 0; i < this.imgs.length; i++) {
      this.imgs[i].removeEventListener('load', this.reloadHeight)
    }
  }

  render() {
    // 每次渲染的时候都拿到最新的高度
    if (this.panel.current) {
      this.setHeight()
    }
    const height = this.props.isShow ? this.panelHeight || 'auto' : 0
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
