// WORKSHOP_START
// You'll need to import some dependencies here :)
// WORKSHOP_END
// FINAL_START
import React from 'react'
import {mount} from 'enzyme'
import {mountToJson} from 'enzyme-to-json'
import StopWatch from './05-state'
// FINAL_END
// COMMENT_START
test('no run', () => {})
// this is here so the template tests don't actually run
function foo() {
// COMMENT_END

test('renders', () => {
// WORKSHOP_START
// mount the component and take a snapshot
// WORKSHOP_END
// FINAL_START
  const wrapper = mount(<StopWatch />)
  expect(mountToJson(wrapper)).toMatchSnapshot()
// FINAL_END
})

// COMMENT_START
}
// COMMENT_END
