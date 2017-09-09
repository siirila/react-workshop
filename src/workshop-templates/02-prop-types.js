// Learn more about React PropTypes here: https://facebook.github.io/react/docs/reusable-components.html#prop-validation
import React from 'react'
import PropTypes from 'prop-types'

function SayHello(props) {
  return (
    <div>Hello {props.firstName} {props.lastName}!</div>
  )
}

// WORKSHOP_START
// Specify firstName and lastName PropTypes for the SayHello component by giving SayHello a `propTypes` object property
// They should both be strings and be required.
// Tips:
// - SayHello.propTypes = {}
// - You can get PropTypes via React.PropTypes, or you can `import {PropTypes} from 'react'`
//
// Then check out the error you get in the console when this example is rendered
// Then fix this example and see the error removed
export const example = () => (
  <SayHello firstName={true} />
)
// WORKSHOP_END
// FINAL_START
SayHello.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

export const example = () => (
  <SayHello firstName="Jill" lastName="Mayfield" />
)
// FINAL_END

export default SayHello

// WORKSHOP_START
/*
eslint
no-unused-vars: 0,
*/
// WORKSHOP_END
