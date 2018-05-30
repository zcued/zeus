/* tslint:disable */

import * as React from 'react'
import { Carousel } from '../../../src'

export default class Page extends React.Component {
  slider = null

  render() {
    return (
      <div style={{ background: '#364d79', height: '160px' }}>
        <Carousel ref={el => this.slider = el} autoplay={true}>
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
        </Carousel>
        <span onClick={() => this.slider.prev()}>prev</span>
        <span onClick={() => this.slider.next()}>next</span>
      </div>
    )
  }
}
