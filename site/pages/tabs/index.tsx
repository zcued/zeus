import * as React from 'react'
import { Tabs, Tab } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <Tabs>
        <Tab selected={true}>Tab</Tab>
        <Tab>Tab</Tab>
        <Tab>Tab</Tab>
        <Tab>Tab</Tab>
      </Tabs>
    )
  }
}
