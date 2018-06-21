import * as React from 'react'
import { StyledClickOutSide, PoppersContainer, Button } from '../dropdown'
import Calender from './calender'
import Icon from '../icon'
import styled from '../theme/styled-components'

const Outside = styled(StyledClickOutSide)`
width:100px;
background-color:white;
`

const FlexCenter = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
`

interface DateObj {
  year: number,
  month: number,
  day: number
}

interface Props {
  onSelectDate: Function,
  defaultValue?: string
}
interface State {
  value: DateObj,
  isOpen: boolean
}

export default class DatePicker extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props)

    const d = new Date()

    this.state = {
      isOpen:  false,
      value: {
        year: d.getFullYear(),
        month: d.getMonth(),
        day: d.getDate()
      }
    }
    if (this.props.defaultValue) {
      const dateReg = /(\d{4}).+(\d{1,2}).+(\d{2})/
      const matchedDate = this.props.defaultValue.match(dateReg)
      if (!matchedDate) {
        throw new Error('defaultValue 格式错误，请使用 xxxx-xx-xx 格式')
      }
      this.state = {
        isOpen:  false,
        value: {
          year: +matchedDate[1],
          month: +matchedDate[2] - 1,
          day: +matchedDate[3]
        }
      }
    }
    
  }

  handleClickOutSide = () => {
      this.setState({ isOpen: false })
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  changeDate = (e) => {
    this.setState({isOpen: false, value: e}, () => {
      this.props.onSelectDate(`${e.year}-${e.month + 1}-${e.day}`)
    })
    
  }

  render() {
    const { isOpen, value } = this.state
    return(
      
      <Outside 
        onClick={this.handleClickOutSide}
      >
            <FlexCenter onClick={this.handleClick}>
            <Button 
              type="button" 
              aria-expanded={isOpen} 
              style={{width: 50}}
            >
              {value && `${value.month + 1}--${value.day}`}
            </Button>
            <Icon 
              size={16}
              glyph="calendar"
            />
            </FlexCenter>
            
          {isOpen ? (
            <PoppersContainer>
              <Calender
                defaultValue={value}
                changeDate={this.changeDate}
              />
            </PoppersContainer>
          ) : null}
      </Outside>
      
    )
  }
}
