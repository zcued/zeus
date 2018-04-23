import * as React from 'react'
import styled from 'styled-components'

interface IconProps {
  size?: number
  onClick?: Function
  glyph: string
}

export const Glyph = ({ glyph }) => {
  switch (glyph) {
    case 'album':
      return (
        <g>
          <path d="M12,6 L0,6 L0,4 L12,4 L12,6 Z M12,8 L12,20 L6,16 L0,20 L0,8 L12,8 Z M12,2 L0,2 L0,0 L12,0 L12,2 Z" />
        </g>
      )
    case 'tag-close':
      return (
        <g>
          <path d="M0,0 L17,0 C17.5522847,-1.01453063e-16 18,0.44771525 18,1 L18,18 C8.0588745,18 1.21743675e-15,9.9411255 0,2.20436424e-15 Z M11,5.4 L8.6,3 L7,4.6 L9.4,7 L7,9.4 L8.6,11 L11,8.6 L13.4,11 L15,9.4 L12.6,7 L15,4.6 L13.4,3 L11,5.4 Z" />
        </g>
      )
    case 'search':
      return (
        <g>
          <path d="M12.076 20.126a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1zm0 4.026C5.406 24.152 0 18.745 0 12.076 0 5.406 5.407 0 12.076 0c6.67 0 12.076 5.407 12.076 12.076 0 6.67-5.407 12.076-12.076 12.076zm12.808-4.96L32 26.307l-1.423 1.424-7.116-7.116 1.423-1.423zm-4.27 4.27l7.117 7.115L26.307 32l-7.115-7.116 1.423-1.423z" />
        </g>
      )

    case 'warning':
      return (
        <g>
          <path d="M6 12A6 6 0 1 1 6 0a6 6 0 0 1 0 12zM5.129 2l.323 5.416h1.096L6.871 2H5.129zm.865 6.097a.955.955 0 0 0-.697.264C5.09 8.538 5 8.765 5 9.042s.09.504.297.68c.18.177.413.278.697.278.283 0 .516-.088.722-.265A.949.949 0 0 0 7 9.042a.92.92 0 0 0-.284-.68 1.04 1.04 0 0 0-.722-.265z" />
        </g>
      )
    default:
      return null
  }
}

const computedSize = ({ size }) => (size || 32) + 'px'

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`

const SvgWrapper: React.SFC = ({ children, ...rest }) => <div {...rest}>{children}</div>

const StyledSvgWrapper = styled(SvgWrapper)`
  display: inline-block;
  flex: 0 0 ${computedSize};
  width: ${computedSize};
  height: ${computedSize};
  min-width: ${computedSize};
  min-height: ${computedSize};
  position: relative;
  color: inherit;
`

const Icon: React.SFC<IconProps> = ({ glyph, size, ...rest }) => (
  <StyledSvgWrapper size={size} {...rest}>
    <InlineSvg
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      id={glyph}
    >
      <title>{glyph}</title>
      <Glyph glyph={glyph} />
    </InlineSvg>
  </StyledSvgWrapper>
)

export default Icon
