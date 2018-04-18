import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  height: 300px;
  color: #fff;
  background: black;
`;

export default class Header extends React.Component {
  render() {
    return (
      <StyledFooter>
        footer
      </StyledFooter>
    )
  }
}
