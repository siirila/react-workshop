import React from 'react'

function OddOrEven(props) {
  // WORKSHOP_START
  // This component should return the string "odd" if the number passed in is odd
  // and "even" if the number passed in is even
  return null;
  // WORKSHOP_END
  // FINAL_START
  return ((props.number % 2) ? 'odd' : 'even');
  // FINAL_END
}

// WORKSHOP_START
// export an example that specifies child content that gets rendered
export function Example() {
  return (
    <div>incomplete</div>
  );
}
// WORKSHOP_END
// FINAL_START
export function Example() {
  return (
    <ul>
      {[1,2,3,4].map(
        (number) => <li>{number} is <OddOrEven number={number} /></li>
      )}
    </ul>
  );
}
// FINAL_END

export default OddOrEven;

// WORKSHOP_START
/*
eslint
no-unused-vars: 0,
*/
// WORKSHOP_END
