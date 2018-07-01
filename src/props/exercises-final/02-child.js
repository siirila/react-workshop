import React from 'react'

function Parent(props) {
  return <div>{props.children}</div>
}

export function Example() {
  return (
    <Parent>
      <h2>Beginning my Studies</h2>
      <p>Beginning my studies the first step pleas’d me so much,
        <br />
        The mere fact consciousness, these forms, the power of motion,
        <br />
        The least insect or animal, the senses, eyesight, love,
        <br />
        The first step I say awed me and pleas’d me so much,
        <br />
        I have hardly gone and hardly wish’d to go any farther,
        <br />
        But stop and loiter all the time to sing it in ecstatic songs.
      </p>
      <p>by: Walt Whitman</p>
    </Parent>  );
}

export default Parent

