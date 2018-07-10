import * as React from 'react'
import { StyledClickOutSide, PoppersContainer, Button } from '../dropdown'
import Calender from './calender'
import Icon from '../icon'
import styled from '../theme/styled-components'

const Outside = styled(StyledClickOutSide)`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.palette.daisy};
`

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 8px;
  height: 38px;
  cursor: pointer;

  button {
    margin-right: 8px;
    padding: 0;
    font-size: ${({ theme }) => theme.font.size.sm}px;
    color: ${({ theme }) => theme.palette.spruce};
    line-height: 20px;
    text-align: left;

    &.value {
      font-weight: ${({ theme }) => theme.font.weight.bold};
      color: ${({ theme }) => theme.palette.black};
    }
  }
`

const PoppersContainerStyled = styled(PoppersContainer)`
  top: 120%;
  border: 1px solid ${({ theme }) => theme.palette.daisy};
  border-radius: 0;
  box-sizing: border-box;
`

interface DateObj {
  year: number
  month: number
  day: number
}

interface Props {
  onChange: Function
  defaultValue?: string
  disabledDate?: string
  placeholder?: string
  className?: string
}

interface State {
  value: DateObj
  isOpen: boolean
}

export default class DatePicker extends React.Component<Props, State> {
  state = {
    isOpen: false,
    value: this.getValue()
  }

  getValue() {
    if (this.props.defaultValue) {
      const dateReg = /(\d{4}).+(\d{1,2}).+(\d{2})/
      const matchedDate = this.props.defaultValue.match(dateReg)

      if (!matchedDate) {
        throw new Error('defaultValue 格式错误，请使用 xxxx-xx-xx 格式')
      }

      return {
        year: +matchedDate[1],
        month: +matchedDate[2] - 1,
        day: +matchedDate[3]
      }
    }

    return null
  }

  handleClickOutSide = () => {
    this.setState({ isOpen: false })
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  changeDate = e => {
    this.setState({ isOpen: false, value: e }, () => {
      this.props.onChange({
        value: `${e.year}-${e.month + 1}-${e.day}`
      })
    })
  }

  formatDate = (date: string) => {
    const reg = /(\d{1,4}).+(\d{1,2}).+(\d{1,2})/
    const matched = date.match(reg)

    if (!matched) {
      throw 'date 格式有误，请使用 XXXX-XX-XX'
    }

    return {
      year: matched[1],
      month: matched[2],
      day: matched[3]
    }
  }

  disabledDate = e => {
    const { disabledDate } = this.props

    if (!disabledDate) {
      return false
    }

    const selectedDate = +new Date(`${e.year}-${e.month + 1}-${e.day}`)

    return selectedDate - +new Date(disabledDate) < 0
  }

  render() {
    const { isOpen, value } = this.state
    const { className, placeholder } = this.props

    return (
      <Outside className={className} onClick={this.handleClickOutSide}>
        <FlexCenter onClick={this.handleClick}>
          {value === null ? (
            <Button type="button" aria-expanded={isOpen}>
              {placeholder || '请选择'}
            </Button>
          ) : (
            <Button className="value" type="button" aria-expanded={isOpen}>
              {value &&
                `${value.month + 1 < 10 ? '0' + (value.month + 1) : value.month + 1}-${
                  value.day < 10 ? '0' + value.day : value.day
                }`}
            </Button>
          )}
          <Icon size={16} glyph="calendar" />
        </FlexCenter>
        {isOpen ? (
          <PoppersContainerStyled>
            <Calender defaultValue={value} changeDate={this.changeDate} disabledDate={this.disabledDate} />
          </PoppersContainerStyled>
        ) : null}
      </Outside>
    )
  }
}
