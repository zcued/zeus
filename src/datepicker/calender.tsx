import * as React from 'react'
import Icon from '../icon'
import styled from '../theme/styled-components'
import { noop, hexa } from '../globals'

const Wrapper = styled.div`
  padding: 16px;
`

const CalenderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CalenderHeaderBox = styled.div`
  display: flex;
  align-items: center;
`

const CalenderHeaderLeft = CalenderHeaderBox.extend`
  div[data-icon='true']:nth-child(2) {
    margin: 0 12px 0 16px;
  }
`

const CalenderHeaderRight = CalenderHeaderBox.extend`
  div[data-icon='true']:nth-child(2) {
    margin: 0 16px 0 12px;
  }
`

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.md}px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: #282828;
  line-height: 26px;
`

const CalenderBody = styled.div`
  margin-top: 16px;
`

const Table = styled.table`
  width: 224px;
  font-size: ${({ theme }) => theme.font.size.sm}px;

  thead {
    color: ${({ theme }) => theme.palette.stone};

    th {
      width: 32px;
      padding-bottom: 8px;
      text-align: center;
    }
  }

  td {
    padding: 0;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    outline: none;
    border: 0;
  }
`

const Cell = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => hexa(theme.palette.primary, 0.6)};
    color: ${({ theme }) => theme.palette.white};
  }

  &.selected {
    background: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.white};
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    background: ${({ theme }) => theme.palette.frost};
    color: ${({ theme }) => theme.palette.white};
    cursor: not-allowed;
  }
`

interface Date {
  year: number
  month: number
  day: number
}

interface Props {
  changeDate: Function
  disabledDate?: Function
  defaultValue?: Date
}

interface State {
  year: number
  month: number
  day: number
  currentYear: number
  currentMonth: number
}

const weekDayNames = ['一', '二', '三', '四', '五', '六', '日']

class Calender extends React.Component<Props, State> {
  static defaultProps = {
    disabledDate: noop
  }

  constructor(props: Props) {
    super(props)

    const { defaultValue } = props

    this.state = {
      // 选中的年月日
      year: defaultValue ? defaultValue.year : null,
      month: defaultValue ? defaultValue.month : null,
      day: defaultValue ? defaultValue.day : null,
      // 切换后的年月
      currentYear: defaultValue ? defaultValue.year : new Date().getFullYear(),
      currentMonth: defaultValue ? defaultValue.month : new Date().getMonth()
    }
  }

  // 当前月各天的时间状态
  getDates() {
    const { currentYear, currentMonth } = this.state
    const dates = []
    let d

    // 上月
    d = new Date(currentYear, currentMonth, 1)
    const dayInWeek = d.getDay() || 7

    if (dayInWeek > 1) {
      d.setDate(0)
      const lastMonthDaysCount = d.getDate()

      for (let i = dayInWeek - 1; i--; ) {
        dates.push({
          year: d.getFullYear(),
          month: d.getMonth(),
          day: lastMonthDaysCount - i,
          notThisMonth: true
        })
      }
    }

    // 本月
    d = new Date(currentYear, currentMonth + 1, 0)
    const thisMonthDaysCount = d.getDate()

    for (let i = 0; i < thisMonthDaysCount; i++) {
      dates.push({
        year: d.getFullYear(),
        month: d.getMonth(),
        day: i + 1
      })
    }

    // 下月
    d = new Date(currentYear, currentMonth + 1, 1)
    const _len = dates.length

    for (let i = 0, len = (_len <= 35 ? 35 : 42) - _len; i < len; i++) {
      dates.push({
        year: d.getFullYear(),
        month: d.getMonth(),
        day: i + 1,
        notThisMonth: true
      })
    }

    return dates
  }

  handleDaySelect(date: any) {
    const { year, month, day } = date

    this.setState({
      year,
      month,
      day,
      currentYear: year,
      currentMonth: month
    })

    this.props.changeDate({
      year,
      month,
      day
    })
  }

  changeDate(change: number, type?: string) {
    const d = new Date(this.state.currentYear, this.state.currentMonth)

    if (type === 'year') {
      d.setFullYear(d.getFullYear() + change)
      this.setState({
        currentYear: d.getFullYear()
      })
    } else {
      d.setMonth(d.getMonth() + change)
      this.setState({
        currentYear: d.getFullYear(),
        currentMonth: d.getMonth()
      })
    }
  }

  renderCalender(dates: any[]) {
    const { year, month, day } = this.state
    const chunks = []

    for (let i = 0; i < dates.length; i += 1) {
      if (i % 7 === 0) chunks.push([])

      chunks[Math.floor(i / 7)].push(dates[i])
    }

    return (
      <>
        {chunks.map((item, index) => (
          <tr key={index}>
            {item.map((date, i) => (
              <td key={i}>
                {date.notThisMonth ? null : (
                  <Cell
                    disabled={this.props.disabledDate(date)}
                    className={year === date.year && month === date.month && day === date.day && `selected`}
                    onClick={this.handleDaySelect.bind(this, date)}
                  >
                    {date.day}
                  </Cell>
                )}
              </td>
            ))}
          </tr>
        ))}
      </>
    )
  }

  render() {
    const dates = this.getDates()
    return (
      <Wrapper>
        <CalenderHeader>
          <CalenderHeaderLeft>
            <Icon
              style={{ transform: 'rotate(90deg)' }}
              glyph="arrow-down-collapse"
              size={14}
              onClick={this.changeDate.bind(this, -1, 'year')}
            />
            <Icon glyph="angle-left" size={10} onClick={this.changeDate.bind(this, -1)} />
            <Title>
              {this.state.currentMonth + 1 < 10 ? '0' + (this.state.currentMonth + 1) : this.state.currentMonth + 1}
            </Title>
          </CalenderHeaderLeft>
          <CalenderHeaderRight>
            <Title>{this.state.currentYear}</Title>
            <Icon size={10} glyph="angle-right" onClick={this.changeDate.bind(this, 1)} />
            <Icon
              size={14}
              style={{ transform: 'rotate(270deg)' }}
              glyph="arrow-down-collapse"
              onClick={this.changeDate.bind(this, 1, 'year')}
            />
          </CalenderHeaderRight>
        </CalenderHeader>
        <CalenderBody>
          <Table>
            <thead>
              <tr>{weekDayNames.map((name, i) => <th key={i}>{name}</th>)}</tr>
            </thead>
            <tbody>{this.renderCalender(dates)}</tbody>
          </Table>
        </CalenderBody>
      </Wrapper>
    )
  }
}

export default Calender
