import React from 'react'
import {mount} from 'enzyme'
import {mountToJson} from 'enzyme-to-json'
import StopWatch from './05-state'

test('renders', () => {
  const wrapper = mount(<StopWatch />)
  expect(mountToJson(wrapper)).toMatchSnapshot()
})

