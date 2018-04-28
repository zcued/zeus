/* tslint:disable */

import * as React from 'react'
import { Carousel } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <div style={{ background: '#364d79', height: '160px' }}>
        <Carousel autoPlay={true} easing="ease">
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
        </Carousel>
      </div>
    )
  }
}
