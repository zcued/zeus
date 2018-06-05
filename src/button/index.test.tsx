import * as React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Button from '.'

test('it works', () => {
  const wrapper = shallow(<Button />)
  expect(wrapper).toMatchSnapshot()
})

describe('button works', () => {
  it('should render an `.icon`', () => {
    const wrapper = shallow(<Button icon="close">button</Button>)
    expect(wrapper.find('Icon')).toHaveLength(1)
  })

  it('should render a `spin`', () => {
    const wrapper = shallow(<Button icon="close" loading={true} />)
    expect(wrapper.prop('disabled')).toEqual(true)
  })
  
  it('should render a child', () => {
    const children = <i className="test" />
    const wrapper = shallow(<Button icon="close" children={children} />)
    expect(wrapper.find('.test').length).toEqual(1)
  })
})
