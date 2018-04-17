import * as React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Button from '.'

test('it works', () => {
  const wrapper = shallow(<Button />)
  expect(wrapper).toMatchSnapshot()
})
