import * as React from 'react'
import { Form, FormControl, Input } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form width={448}>
          <FormControl label="姓名" require={true} helper="请填写正确的纳税人识别号">
            <Input />
          </FormControl>
          <FormControl error={true} labelWidth={150} helper="请填写正确的纳税人识别号">
            <Input />
          </FormControl>
        </Form>
        <Form width={300}>
          <FormControl label="姓名" labelWidth={150}>
            <Input />
          </FormControl>
          <FormControl label="年龄" labelWidth={150}>
            <Input />
          </FormControl>
        </Form>
      </React.Fragment>
    )
  }
}
