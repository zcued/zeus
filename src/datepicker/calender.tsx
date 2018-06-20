import * as React from 'react'
import Icon from '../icon'
import styled from '../theme/styled-components'
const width = '300px'

export const CalenderHeader = styled.div`
width:100%;
display:flex;
justify-content:space-between;
height:20%;
align-items:center;
margin:10px 0 10px 0;
`
export const CalenderBody = styled.div`
  table {
    width: ${width};
  }
`
export const Wrapper = styled.div`
width: ${width};
`
export const Title = styled.div`
font-family: Futura - Bold
font-size: 28px
color: #282828
letter-spacing: 0;
`
export const Table = styled.table`
height:100%;
border:1pz black;
  & td{
    height:42px;
    outline:none;
    border:0;
    padding:0;
  }
`
export const Cell = styled.button`
  width:100%;
  height:100%;
  background: transparent;
  outline: none;
  border:0;
  &.selected{
    background: #EA4335;
    color: white;
    border-radius:50%;
  }
  &:focus{
    outline:none;
  }
`
interface Date {
  year: number,
  month: number,
  day: number
}

interface Props {
  changeDate: Function,
  defaultValue?: Date,
}
interface State {
  year: number,
  month: number,
  day: number,
  currentYear: number,
  currentMonth: number
}
const weekDayNames = ['一', '二', '三', '四', '五', '六', '日']

class Calender extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    const { defaultValue } = this.props

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
      for (let i = dayInWeek - 1; i--;) {
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

    const chunks = []
    for (let i = 0; i < dates.length; i += 1) {
      if (i % 7 === 0) chunks.push([])
      chunks[Math.floor(i / 7)].push(dates[i])
    }
    const { year, month, day } = this.state
    return (
      <>
        {
          chunks.map((item, index) => (
            <tr key={index}>
              {
                item.map((date, i) => (
                  <td key={i}>
                    {
                      date.notThisMonth ?
                        null
                        :
                        <Cell
                          className={
                            year === date.year &&
                            month === date.month &&
                            day === date.day &&
                            `selected`
                          }
                          onClick={this.handleDaySelect.bind(this, date)}
                        >
                          {date.day}
                        </Cell>
                    }

                  </td>
                ))
              }

            </tr>
          ))
        }
      </>
    )
  }

  render() {
    const dates = this.getDates()
    return (
      <Wrapper>
        <CalenderHeader>
          <Icon
            style={{ transform: 'rotate(90deg)' }}
            glyph="arrow-down-collapse"
            size={26}
            onClick={this.changeDate.bind(this, -1, 'year')}
          />
          <Icon
            glyph="angle-left"
            size={26}
            onClick={this.changeDate.bind(this, -1)}
          />

          <Title>{this.state.currentYear}</Title>
          <Title>{this.state.currentMonth + 1}</Title>
          <Icon
            size={26}
            glyph="angle-right"
            onClick={this.changeDate.bind(this, 1)}
          />
          <Icon
            size={26}
            style={{ transform: 'rotate(270deg)' }}
            glyph="arrow-down-collapse"
            onClick={this.changeDate.bind(this, 1, 'year')}
          />
        </CalenderHeader>

        <CalenderBody>
          <Table>
            <thead>
              <tr>{weekDayNames.map((name, i) => <th style={{ color: '#A3A3A3' }} key={i}>{name}</th>)}</tr>
            </thead>
            <tbody>
              {this.renderCalender(dates)}
            </tbody>
          </Table>
        </CalenderBody>
      </Wrapper>
    )
  }
}

export default Calender
