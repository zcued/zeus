import * as React from 'react'
import Slider from 'react-slick'
import styled from '../theme/styled-components'

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

export const CarouselStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  /* Slider */
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    user-select: none;

    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;

    content: '';
  }

  .slick-track:after {
    clear: both;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  /* Arrows */
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }

  .slick-prev {
    left: -25px;
  }

  .slick-next {
    right: -25px;
  }

  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    line-height: 1;

    opacity: 0.75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev:before {
    content: '←';
  }

  .slick-next:before {
    content: '→';
  }

  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }

  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  [dir='rtl'] .slick-prev {
    right: -25px;
    left: auto;
  }

  [dir='rtl'] .slick-prev:before {
    content: '→';
  }

  [dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
  }

  [dir='rtl'] .slick-next:before {
    content: '←';
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: 22px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }

  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 10px;
    height: 10px;
    margin: 0 3px;
    padding: 0;

    border-radius: 50%;

    cursor: pointer;
    background: ${props => props.theme.palette.white};

    transform: scale(0.6);
    transition: all 0.3s;
  }

  .slick-dots li.slick-active,
  .slick-dots li:hover {
    transform: scale(1);
    background: ${props => props.theme.palette.primary};
  }

  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 100%;
    height: 100%;
    padding: 0;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }

  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }

  .slick-dots li button:before {
    display: none;
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: 0.25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }
`

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
        <Slider ref={el => (this.slider = el)} {...rest}>
          {children}
        </Slider>
      </CarouselStyled>
    )
  }
}
