import React from 'react'

export default SayHello

function SayHello(props) {
  // WORKSHOP_START
  // Return JSX that uses the firstName and lastName values from the props argument
  // to render "Hello {firstName} {lastName}"
  return (
    <div>Incomplete</div>
  )
  // WORKSHOP_END
  // FINAL_START
  return (
    <div>Hello {props.firstName} {props.lastName}!</div>
  )
  // FINAL_END
}
// WORKSHOP_START
// export an example that specifies a firstName and a lastName
// as props to the SayHello component
export const example = () => (
  <div>Incomplete</div>
)
// WORKSHOP_END
// FINAL_START
export const example = () => (
  <SayHello firstName="Jill" lastName="Mayfield" />
)
// FINAL_END
