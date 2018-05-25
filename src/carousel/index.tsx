import * as React from 'react'
import styled from '../theme/styled-components'

interface Porps {
  autoPlay?: boolean
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'
  className?: string
}

class Carousel extends React.Component<Porps> {
  timer = null
  carousel: HTMLElement = null
  state = {
    currentIndex: 0
  }

  componentDidMount() {
    if (this.props.autoPlay) this.autoPlay()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  autoPlay() {
    this.timer = setInterval(() => {
      this.next()
    }, 5000)
  }

  next(index?: number) {
    const { currentIndex } = this.state
    const { easing } = this.props
    const count =  React.Children.count(this.props.children)
    const duration = 0.5
    let nextIndex = index !== undefined ? index : currentIndex + 1

    if (index !== undefined && currentIndex === count - 1 && index === 0) {
      nextIndex = count
    }

    clearInterval(this.timer)
    this.carousel.style.transition = `all ${easing ? easing : 'linear'} ${duration}s`
    this.carousel.style.transform = `translate3d(-${(nextIndex + 1) * 100}%, 0, 0)`

    if (nextIndex >= count) {
      nextIndex = 0

      setTimeout(() => {
        this.carousel.style.transition = 'none'
        this.carousel.style.transform = `translate3d(-${(nextIndex + 1) * 100}%, 0, 0)`
      }, duration * 1000)
    }

    this.setState({
      currentIndex: nextIndex
    }, () => {
      this.autoPlay()
    })
  }

  render() {
    const { currentIndex } = this.state
    const { children, className } = this.props
    const childrenArr = React.Children.toArray(children)
    const childrenCount = React.Children.count(children)
    const newChildren = [].concat(childrenArr[childrenCount - 1], childrenArr, childrenArr[0])

    return (
      <div className={className}>
        <div className="carousel__wrapper" ref={el => {this.carousel = el}} style={{ transform: 'translate3d(-100%, 0, 0)' }}>
          {newChildren.map((item, index) => {
            return (
              <div className="carousel__item" key={index - 1}>{item}</div>
            )
          })}
        </div>
        <div className="carousel__dots">
          {Object.keys(childrenArr).map(index => {
            return (
              <span
                className={currentIndex === Number(index) ? 'active' : ''}
                key={index}
                onClick={() => this.next(Number(index))}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

const CarouselStyled = styled(Carousel)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .carousel__wrapper {
    white-space: nowrap;
    width: 100%;
    height: 100%;
  }

  .carousel__item {
    display: inline-block;
    width:100%;
    height: 100%;
  }

  .carousel__dots {
    position: absolute;
    bottom: 22px;
    left: 50%;
    line-height: 0;
    transform: translateX(-50%);

    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${props => props.theme.palette.white};
      cursor: pointer;
      transform: scale(0.6);
      transition: all .3s;

      &.active,
      &:hover {
        transform: scale(1);
        background: ${props => props.theme.palette.primary};
      }

      & + span {
        margin-left: 6px;
      }
    }
  }
`

export default CarouselStyled
