import React from 'react'
import {render} from 'enzyme'
const Example = require(`../../../src/props/${process.env.TEST_DIR ||
  'exercises'}/03-jumbled`).Example

test('Renders "The expected list of X-Men"', () => {
  expect(render(<Example>Passed in a child string</Example>)).toMatchSnapshot()
})
