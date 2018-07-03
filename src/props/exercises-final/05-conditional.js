import React from 'react'

function OddOrEven(props) {
  return ((props.number % 2) ? 'odd' : 'even');
}

export function Example() {
  return (
    <ul>
      {[1,2,3,4].map(
        (number) => <li>{number} is <OddOrEven number={number} /></li>
      )}
    </ul>
  );
}

export default OddOrEven;

