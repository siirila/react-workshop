import React from 'react';

function SayHello(props) {
  // WORKSHOP_START
  // Return JSX that uses the {firstName} and {lastName} values from the props argument
  // Assuming firstName = "John" and lastName = "Doe"
  // it should render "Hello John Doe" in a div (without the quotes)
  return (<div>Replace this with the expected text</div>);
  // WORKSHOP_END
  // FINAL_START
  return (
    <div>
      Hello {props.firstName} {props.lastName}
    </div>
  );
  // FINAL_END
}

// WORKSHOP_START
// export an example that specifies a firstName and a lastName
// as props to the SayHello component
export function Example() {
  return (
    <div>Incomplete</div>
  );
}
// WORKSHOP_END
// FINAL_START
export function Example() {
  return (
    <SayHello firstName="Jared" lastName="Siirila" />
  );
}
// FINAL_END

export default SayHello

// WORKSHOP_START
/*
eslint
no-unused-vars: 0,
*/
// WORKSHOP_END
