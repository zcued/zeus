import * as React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Alert from '.'

describe('Alert', () => {
  it('sets data attributes on alert', () => {
    const wrapper = shallow(<Alert data-test="test-id" data-id="12345" />)
    expect(wrapper.prop('data-test')).toBe('test-id')
    expect(wrapper.prop('data-id')).toBe('12345')
  })

  it('sets aria attributes on alert', () => {
    const wrapper = shallow(<Alert aria-describedby="some-label" />)

    expect(wrapper.prop('aria-describedby')).toBe('some-label')
  })

  it('sets role attribute on alert', () => {
    const wrapper = shallow(<Alert role="status" />)
    expect(wrapper.prop('role')).toBe('status')
  })

  it('sets title on alert', () => {
    const wrapper = shallow(<Alert title="status" />)
    expect(wrapper).toMatchSnapshot()
  })
})
