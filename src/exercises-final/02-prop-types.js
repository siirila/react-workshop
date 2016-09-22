// Learn more about React PropTypes here: https://facebook.github.io/react/docs/reusable-components.html#prop-validation
import React from 'react'

export default SayHello

function SayHello(props) {
  return (
    <div>Hello {props.firstName} {props.lastName}!</div>
  )
}

SayHello.propTypes = {
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
}

export const example = () => (
  <SayHello firstName="Jill" lastName="Mayfield" />
)
