import styled from '../theme/styled-components'

const width = '300px'
export const Wrapper = styled.div`
width: ${width};
`

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

export const FlexCenter = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:40%;
`

export const DateRangeWaper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width: 240px;
border: 1px solid #F0F4F5;

`

export const SplitLine = styled.div`
border:1px solid #666666;
height:0px;
width:14px;
`