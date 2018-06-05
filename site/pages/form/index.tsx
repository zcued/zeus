import * as React from 'react'
import { Form, FormControl, FormHelperText, FormLabel, Input } from '../../../src'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form width={448}>
          <FormControl>
            <FormLabel>姓名</FormLabel>
            <Input />
            <FormHelperText>请填写正确的纳税人识别号</FormHelperText>
          </FormControl>
          <FormControl error>
            <FormLabel>年龄</FormLabel>
            <Input />
            <FormHelperText>请填写正确的纳税人识别号</FormHelperText>
          </FormControl>
        </Form>
        <Form width={300}>
          <FormControl>
            <FormLabel>姓名</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>年龄</FormLabel>
            <Input />
          </FormControl>
        </Form>
      </React.Fragment>
    )
  }
}
