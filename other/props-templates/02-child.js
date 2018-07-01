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
// FINAL_END

export default Parent

// WORKSHOP_START
/*
eslint
no-unused-vars: 0,
*/
// WORKSHOP_END
