import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'

export interface Porps {
  type?: 'card' | 'atlas' | 'picture'
  size?: 'small'
  imgSrc?: string
  imgAlt?: string
  imgHeight?: number
  imgPlaceHolder?: string
  titlePosition?: 'bottom'
  title?: string
  subTitle?: string
  tag?: JSX.Element
  operator?: JSX.Element
  borderStyle?: string
  customImage?: JSX.Element
  customContent?: JSX.Element
  className?: string
}

class Card extends React.Component<Porps> {
  render() {
    const {
      className,
      type,
      imgSrc,
      imgAlt,
      customImage,
      titlePosition,
      title,
      subTitle,
      tag,
      operator,
      customContent
    } = this.props

    return (
      <div className={className}>
        {customImage ? customImage : <img src={imgSrc} alt={imgAlt} />}
        {type !== 'atlas' && type !== 'picture' && titlePosition === 'bottom' ? (
          customContent ? (
            customContent
          ) : (
            <p className="title--bottom">{title}</p>
          )
        ) : (
          <React.Fragment>
            <div className="title__wrapper" />
            {type !== 'picture' ? (
              <div className="title">
                {title ? <p>{title}</p> : null}
                {subTitle ? <p>{subTitle}</p> : null}
              </div>
            ) : null}
            {type === 'atlas' ? <div className="tag" /> : null}
            <div className="operator">{operator}</div>
          </React.Fragment>
        )}
        {tag ? <div className="tag--custom">{tag}</div> : null}
      </div>
    )
  }
}

const CardStyled = styled(Card)`
  position: relative;
  width: 100%;
  border-radius: ${props => (props.type === 'atlas' ? (props.size === 'small' ? '0 8px 8px 0' : '0 16px 16px 0') : '')};
  border: ${({ borderStyle }) => (borderStyle ? borderStyle : '')};
  box-sizing: border-box;
  transition: all 0.3s;

  img {
    display: block;
    width: 100%;
    height: ${props => (props.imgHeight ? props.imgHeight + 'px' : 'auto')};
    border-radius: ${props =>
      props.type === 'atlas' ? (props.size === 'small' ? '0 8px 8px 0' : '0 16px 16px 0') : ''};
    background: rgba(255, 255, 255, 0.3);
    background-image: ${({ imgPlaceHolder }) => (imgPlaceHolder ? 'url(' + imgPlaceHolder + ')' : '')};
    background-position: center;
    background-repeat: no-repeat;
  }

  p {
    margin: 0;
  }

  .title__wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: ${props =>
      props.type === 'atlas' ? (props.size === 'small' ? '0 8px 8px 0' : '0 16px 16px 0') : ''};
  }

  .title {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: ${props => (props.size === 'small' ? T('font.size.sm') : T('font.size.md'))}px;
    color: ${T('palette.white')};
    line-height: ${props => (props.size === 'small' ? '20px' : '28px')};
    transform: translateY(-50%);

    p + p {
      margin-top: ${props => (props.size === 'small' ? '4px' : '8px')};
      font-size: ${props => (props.size === 'small' ? T('font.size.xs') : '16')}px;
      line-height: ${props => (props.size === 'small' ? '18px' : '22px')};
    }

    p:first-child {
      font-weight: bold;
    }
  }

  .title--bottom {
    margin: 0;
    padding: ${props => (props.size === 'small' ? '8px 12px' : '16px 24px')};
    font-size: ${props => (props.size === 'small' ? T('font.size.sm') : T('font.size.md'))}px;
    color: ${T('palette.spruce')};
    line-height: ${props => (props.size === 'small' ? '20px' : '28px')};
    background: ${T('palette.white')};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .tag {
    position: absolute;
    top: 0;
    right: ${props => (props.size === 'small' ? '16px' : '24px')};
    width: ${props => (props.size === 'small' ? '12px' : '14px')};
    height: 8px;
    background-image: linear-gradient(${T('palette.secondary')} 50%, transparent 50%);
    background-size: auto 4px;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      width: 0;
      height: 0;
      border: ${props => (props.size === 'small' ? '6px' : '7px')} solid ${T('palette.secondary')};
      border-top: ${props => (props.size === 'small' ? '8px' : '11px')} solid ${T('palette.secondary')};
      border-bottom: ${props => (props.size === 'small' ? '4px' : '5px')} solid transparent;
    }
  }

  .tag--custom {
    position: absolute;
    top: 8px;
    left: -8px;
  }

  .operator {
    position: absolute;
    bottom: 8px;
    right: 8px;
    opacity: 0;
    transition: all 0.3s;
  }

  .custom-hover {
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover {
    box-shadow: 0 4px ${props => (props.size === 'small' ? '8px' : '16px')} rgba(0, 0, 0, 0.3);

    .operator,
    .custom-hover {
      opacity: 1;
    }
  }
`

export default CardStyled
