import React from 'react';

function SayHello(props) {
  return (
    <div>
      Hello {props.firstName} {props.lastName}
    </div>
  );
}

export function Example() {
  return (
    <SayHello firstName="Jared" lastName="Siirila" />
  );
}

export default SayHello

