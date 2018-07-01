import React from 'react'
import {render} from 'enzyme'
const SayHello = require(`../../../src/props/${process.env.TEST_DIR ||
  'exercises'}/01-hello`).default

test('Renders "Hello {props.firstName} {props.lastName}" in a div', () => {
  expect(render(<SayHello firstName="Jill" lastName="Doe" />)).toMatchSnapshot()
})
