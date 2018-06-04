import styled from '../theme/styled-components'
import { T } from '../util'

export const MenuContainer = styled.ul`
  margin: 0;
  padding: ${T('spacing.md')}px 0;
  width: 212px;
  font-size: ${T('font.size.md')}px;
  line-height: 28px;
  text-align: center;
  background: ${T('palette.white')};
  list-style: none;
`

export const SubMenuTitle = styled.div`
  position: relative;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s;

  span {
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
  }

  [data-icon='true'] {
    color: ${T('palette.black')};
    transition: all 0.3s;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 40px;
    height: 4px;
    background: ${T('palette.primary')};
    opacity: 0;
    transform: translateX(-50%);
    transition: opacity 0.3s;
  }
`

export const MenuItemContainer = styled.li`
  position: relative;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 40px;
    height: 4px;
    background: ${T('palette.primary')};
    opacity: 0;
    transform: translateX(-50%);
    transition: opacity 0.3s;
  }

  &.active {
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-top-width: 14px;
      border-bottom-width: 14px;
      border-right-color: ${T('palette.white')};
      transform: translateY(-50%);
    }

    &::after {
      opacity: 1;
    }
  }

  &:hover {
    color: ${T('palette.primary')};

    &.active {
      color: ${T('palette.black')};
    }
  }
`

export const SubMenuContainer = styled.ul`
  padding: 0 0 16px;
  list-style: none;
  font-size: 16px;
  color: ${T('palette.spruce')};

  ${MenuItemContainer} {
    padding: 8px;
  }
`
