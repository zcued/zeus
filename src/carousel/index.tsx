import * as React from 'react'
import Slider from 'react-slick'
import { CarouselStyled } from './style'

interface Props {
  effect?: 'scrollx' | 'fade'
  dots?: boolean
  vertical?: boolean
  autoplay?: boolean
  easing?: string
  beforeChange?: (from: number, to: number) => void
  afterChange?: (current: number) => void
  style?: React.CSSProperties
  prefixCls?: string
  accessibility?: boolean
  nextArrow?: HTMLElement | any
  prevArrow?: HTMLElement | any
  pauseOnHover?: boolean
  className?: string
  adaptiveHeight?: boolean
  arrows?: boolean
  autoplaySpeed?: number
  centerMode?: boolean
  centerPadding?: string | any
  cssEase?: string | any
  dotsClass?: string
  draggable?: boolean
  fade?: boolean
  focusOnSelect?: boolean
  infinite?: boolean
  initialSlide?: number
  lazyLoad?: boolean
  rtl?: boolean
  slide?: string
  slidesToShow?: number
  slidesToScroll?: number
  speed?: number
  swipe?: boolean
  swipeToSlide?: boolean
  touchMove?: boolean
  touchThreshold?: number
  variableWidth?: boolean
  useCSS?: boolean
  slickGoTo?: number
}

export default class Carousel extends React.Component<Props> {
  static defaultProps = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  slider = null

  next = () => {
    this.slider.slickNext()
  }

  prev = () => {
    this.slider.slickPrev()
  }

  goTo = (slide: number) => {
    this.slider.slickGoTo(slide)
  }

  render() {
    const { children, className, ...rest } = this.props

    return (
      <CarouselStyled className={className}>
        <Slider ref={el => this.slider = el} {...rest}>
          {children}
        </Slider>
      </CarouselStyled>
    )
  }
}
