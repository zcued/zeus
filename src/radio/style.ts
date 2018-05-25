import styled from '../theme/styled-components'
import { Transition } from '../globals'
import { T } from '../util'

export const Input = styled.input`
  border: 0;
  height: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  width: 0;
`

export const Fake = styled.span`
  position: relative;
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  border: 4px solid ${T('palette.frost')};
  box-sizing: border-box;
  transition: ${Transition.reaction.on};

  & > svg {
    display: none;
    position: absolute;
    top: 0px;
    left: -1px;
    width: 10px;
    height: 10px;
  }

  &[aria-checked='true'] {
    border-color: ${T('palette.primary')};
    background: ${T('palette.primary')};

    svg {
      display: block;
    }

    &.disabled {
      background: ${({ theme }) => theme.palette.primary};
    }
  }

  &.disabled {
    background: ${({ theme }) => theme.palette.daisy};
  }
`

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  padding: 10px 0;
  flex: none;
  color: ${T('palette.spruce')};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${T('palette.primary')};
  }

  &.disabled {
    cursor: not-allowed;

    &:hover {
      color: ${T('palette.spruce')};
    }
  }
`

export const Text = styled.span`
  margin-left: 10px;
`
