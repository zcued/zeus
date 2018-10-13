import * as React from 'react'
import { Tabs, Tab } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <>
        <Tabs>
          <Tab selected={true}>Tab</Tab>
          <Tab>Tab</Tab>
          <Tab>Tab</Tab>
          <Tab>Tab</Tab>
        </Tabs>
        <Tabs align="center">
          <Tab selected={true}>Tab2</Tab>
          <Tab>Tab2</Tab>
          <Tab>Tab2</Tab>
          <Tab>Tab2</Tab>
        </Tabs>
      </>
    )
  }
}
