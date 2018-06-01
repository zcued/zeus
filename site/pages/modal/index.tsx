/* tslint:disable */

import * as React from 'react'
import { Modal, Button } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <Modal title="Modal" footer={<Button>qwe</Button>} width={508} height={305} isOpen={true}>
        qweqwe
      </Modal>
    )
  }
}
