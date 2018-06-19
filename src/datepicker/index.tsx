import * as React from 'react'
import Calender from './calender'
// import ClickOutSide from '../dropdown/click-outside'
import { StyledClickOutSide, PoppersContainer, Button } from '../dropdown/style'
import Icon from '../icon'
import { DateRangeWaper, SplitLine , FlexCenter } from './style'
interface Props {
  onSelectDate: Function
}

class DatePicker extends React.Component<Props> {

  static defaultProps = {
  }

  state = {
    isOpen:  false,
    from: null,
    to: null,
    type: null
  }

  componentDidMount() {
    this.getDateState()
  }
  
  getDateState() {
    const d = new Date()
    const year = d.getFullYear()
    const month = d.getMonth()
    const day = d.getDate()

    this.setState({

      from: {
        year: year ,
        month: month ,
        day: day 
      },
      to: {
        year: year ,
        month: month ,
        day: day + 10 
      }
      
    })
  }

  handleClickOutSide = () => {
      this.setState({ isOpen: false })
  }

  handleClick = (type?: string) => {
    this.setState({ type, isOpen: !this.state.isOpen })
    this.props.onSelectDate({

    })

  }

  changeDate = (e) => {
    this.setState({[this.state.type]: e, isOpen: false}, () => {
      const { from , to} = this.state
      const newFrom = Object.assign({}, from, {month: from.month + 1})
      const newTo = Object.assign({}, to, {month: to.month + 1})
      this.props.onSelectDate({newFrom, newTo})
    })
    
  }

  render() {
    const { isOpen, from, to, type } = this.state
    return(
      
      <StyledClickOutSide onClick={this.handleClickOutSide}>
        <div>
          <DateRangeWaper>
            <FlexCenter onClick={() => this.handleClick('from')}>
            <Button 
              type="button" 
              aria-expanded={isOpen} 
              style={{width: 50}}
              
            >
              {from && `${from.month + 1}--${from.day}`}
            </Button>
            <Icon glyph="calendar"/>
            </FlexCenter>
            
            <SplitLine/>
            <FlexCenter onClick={() => this.handleClick('to')}>
              <Button 
                type="button" 
                aria-expanded={isOpen} 
                style={{width: 50}}
                
              >
                {from && `${to.month + 1}--${to.day}`}
              </Button>
              <Icon glyph="calendar"/>
            </FlexCenter>
          </DateRangeWaper>
          
          {isOpen ? (
            <PoppersContainer>
              <Calender
                defaultValue={this.state[type]}
                changeDate={this.changeDate}
              />
            </PoppersContainer>
          ) : null}
        </div>
      </StyledClickOutSide>
      
    )
  }
}

export default DatePicker