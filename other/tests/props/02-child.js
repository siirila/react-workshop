import React from 'react'
import {render} from 'enzyme'
const Parent = require(`../../../src/props/${process.env.TEST_DIR ||
  'exercises'}/02-child`).default

test('Renders "Passed in a child string" in a div', () => {
  expect(render(<Parent>Passed in a child string</Parent>)).toMatchSnapshot()
})

test('Renders <span>Child element passed in</span> in a div', () => {
  expect(
    render(
      <Parent>
        <span>Child element passed in</span>
      </Parent>,
    ),
  ).toMatchSnapshot()
})
