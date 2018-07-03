import React from 'react'
import {render} from 'enzyme'
const Example = require(`../../../src/props/${process.env.TEST_DIR ||
  'exercises'}/04-ingredients`).Example

test('Renders "The expected list of ingredients', () => {
  expect(render(<Example />)).toMatchSnapshot()
})
