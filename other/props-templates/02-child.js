import React from 'react'

function Parent(props) {
  // WORKSHOP_START
  // This component should return a <div> that contains any JSX
  // that was contained within its tags when invoked
  // i.e. <Parent>Some text</Parent> should render
  // <div>Some text</div>
  return <div>Replace this with the expected content</div>
  // WORKSHOP_END
  // FINAL_START
  return <div>{props.children}</div>
  // FINAL_END
}

export default Parent

// WORKSHOP_START
/*
eslint
no-unused-vars: 0,
*/
// WORKSHOP_END
