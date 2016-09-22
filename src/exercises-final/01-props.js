import React from 'react'

export default SayHello

function SayHello(props) {
  return (
    <div>Hello {props.firstName} {props.lastName}!</div>
  )
}
export const example = () => (
  <SayHello firstName="Jill" lastName="Mayfield" />
)
