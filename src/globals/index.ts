import styled, { css } from '../theme/styled-components'
import { T } from '../util'

export const Truncate = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  min-width: 0;
`

export const Transition = {
  hover: {
    on: 'all 0.2s ease-in',
    off: 'all 0.2s ease-out'
  },
  reaction: {
    on: 'all 0.15s ease-in',
    off: 'all 0.1s ease-out'
  }
}

export const Flex = styled.div`
  display: flex;
`

export const FlexRow = Flex.extend`
  align-items: center;
`

export const FlexCol = Flex.extend`
  flex-direction: column;
  align-items: stretch;
`

export const Span = styled.span`
  color: ${T('palette.black')};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`

export const Label = Flex.extend`
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  font-weight: ${T('font.weight.medium')};
  font-size: 0.875rem;
  letter-spacing: -0.4px;
`

export const hexa = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

export const zIndex = new function() {
  this.hide = -1
  this.base = 0
  this.loading = 3
  this.selected = 25
  this.active = 50
  this.nav = 1000
  this.navFixed = 1050
  this.dropdown = 2000
  this.popover = 3000
  this.tooltip = 4000
  this.banner = 5000
  this.overlay = 5998
  this.modal = 5999
  this.toast = 6000
}()

export const noop = () => {} // tslint:disable-line
