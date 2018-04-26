import * as React from 'react'
import { Button } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button size="sm">购买授权</Button>
        <Button size="sm" disabled={true}>购买授权</Button>
        <Button>购买授权</Button>
        <Button size="md">购买授权</Button>
        <Button disabled={true}>购买授权</Button>
        <Button primary={true} size="sm">
          button
        </Button>
        <Button primary={true}>button</Button>
        <Button primary={true} size="md">
          button
        </Button>
        <Button primary={true} disabled={true}>
          button
        </Button>
        <Button icon="close">button</Button>
        <Button icon="close" loading={true} />
      </React.Fragment>
    )
  }
}
