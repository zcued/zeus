import styled from '../theme/styled-components'
import { T } from '../util'

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: ${T('palette.white')};
  border: 1px solid;
  border-color: ${T('palette.black')};
  border-radius: ${T('misc.radius') + 'px'};
  font-size: 16px;
  color: ${T('palette.black')};
  padding: 10px ${T('spacing.sm') + 'px'};
  cursor: ${props => (props.readOnly ? 'not-allowed' : 'auto')};
  transition: border-color ${T('misc.animationDuration')}, box-shadow ${T('misc.animationDuration')};
  &:hover {
    border-color: #b7b7b7;
  }
  &:focus {
    border-color: #0a84ae;
    box-shadow: 0px 0px 0 1px #0a84ae;
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: #b2b2b2;
  }
`

export default StyledInput
