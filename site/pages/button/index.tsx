import * as React from 'react'
import { Button } from '../../../src'
import { Flex } from '../../../src'
import { Badge } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ background: '#fff' }}>
          <Button icon="design" loading={true} size="sm">
            购买授权
          </Button>
          <Button icon="design" loading={true} size="sm" disabled={true}>
            购买授权
          </Button>
          <Button icon="design" loading={true}>
            购买授权
          </Button>
          <Button loading={true} disabled={true}>
            购买授权
          </Button>
          <Button loading={true} size="md">
            购买授权
          </Button>
          <Button loading={true} size="md" disabled={true}>
            购买授权
          </Button>
        </div>
        <div style={{ margin: '20px' }}>
          <Button icon="design" size="sm" type="primary">
            购买授权
          </Button>
          <Button icon="design" size="sm" type="primary" disabled={true}>
            购买授权
          </Button>
          <Button icon="design" type="primary">
            购买授权
          </Button>
          <Button icon="design" type="primary" disabled={true}>
            购买授权
          </Button>
          <Button icon="design" size="md" type="primary">
            购买授权
          </Button>
          <Button icon="design" size="md" type="primary" disabled={true}>
            购买授权
          </Button>
        </div>
        <div style={{ background: '#000' }}>
          <Button icon="design" size="sm" type="ghost">
            购买授权
          </Button>
          <Button icon="design" size="sm" type="ghost" disabled={true}>
            购买授权
          </Button>
          <Button icon="design" type="ghost">
            购买授权
          </Button>
          <Button icon="design" type="ghost" disabled={true}>
            购买授权
          </Button>
          <Button icon="design" size="md" type="ghost">
            购买授权
          </Button>
          <Button icon="design" size="md" type="ghost" disabled={true}>
            购买授权
          </Button>
        </div>
        <Flex type="section">
          <div>123</div>
          <Badge>123</Badge>
          <Badge pill={true}>123</Badge>
        </Flex>
      </React.Fragment>
    )
  }
}
