import styled from '../theme/styled-components'
import Flex from '../flex'
import { T } from '../util'

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: -56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ color, theme }) => color || theme.palette.white};
`

export const ModalContainer = styled.div`
  text-align: center;
  height: 100%;
  margin: 0 auto;
  max-height: 80vh;
  overflow: scroll;
`

export const Header = styled.div`
  margin-top: ${T('spacing.lg')}px;
  margin-bottom: ${T('spacing.xl')}px;
  font-weight: ${T('font.weight.bold')};
  font-size: ${T('font.size.md')}px;
  color: ${T('palette.black')};
  line-height: 28px;
`

export const Body = styled(Flex)``

export const Footer = styled(Flex)`
  margin-top: ${T('spacing.xl')}px;
  margin-bottom: ${T('spacing.lg')}px;

  & > button + button {
    margin-left: ${T('spacing.md')}px;
  }
`
