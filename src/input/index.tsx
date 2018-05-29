import styled from '../theme/styled-components'
import { T } from '../util'

const Input = styled.input`
  width: 100%;
  outline: none;
  box-sizing: border-box;
  background: ${T('palette.white')};
  border: none;
  border-bottom: 4px solid ${T('palette.black')};
  font-size: ${T('font.size.xl')}px;
  height: 56px;
  color: ${T('palette.black')};
  padding: 0 ${T('spacing.md')}px;
  cursor: ${({ readOnly }) => (readOnly ? 'not-allowed' : 'auto')};
  &::-webkit-input-placeholder {
    color: ${T('palette.stone')};
  }
`

export default Input
