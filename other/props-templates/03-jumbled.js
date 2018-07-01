import React from 'react';

function Xmen(props) {
  // WORKSHOP_START
  // This component should return the name of the squad followed by the list of names of
  // X-Men members on that squad followed by their alter ego.
  // Each name in the list should be a link to their wiki page on the X-Men wiki
  // All of the code is here, but the lines are in the wrong order.
  // The indentation will also need to be changed as the lines are moved.
  // Reorder the lines so it outputs the correct data.
  <p>The members of the X-Men {props.squad} team are:</p>
  
  return (
    <ul>
    <div>
      <a href={member.wiki}>{member.name}</a> aka {member.alterEgo}
        {props.members.map(
          (member) => (
            <li key={member.name}>
            </li>
          )
        )}
    </div>
    </ul>
  );  
  // WORKSHOP_END
  // FINAL_START
  return (
    <div>
      <p>The members of the X-Men {props.squad} team are:</p>
      <ul>
        {props.members.map(
          (member) => (
            <li key={member.name}>
              <a href={member.wiki}>{member.name}</a> aka {member.alterEgo}
            </li>
          )
        )}
      </ul>
    </div>
  );
  // FINAL_END
}

let characters = [
  {
    name: "Wolverine",
    alterEgo: "Logan",
    wiki: "http://x-men.wikia.com/wiki/Wolverine"
  },
  {
    name: "Cyclops",
    alterEgo: "Scott Summers",
    wiki: "http://x-men.wikia.com/wiki/Cyclops"
  },
  {
    name: "Jean Grey",
    alterEgo: "Jean Summers",
    wiki: "http://x-men.wikia.com/wiki/Jean_Grey"
  },
  {
    name: "Beast",
    alterEgo: "Hank McCoy",
    wiki: "http://x-men.wikia.com/wiki/Beast"
  },
  {
    name: "Storm",
    alterEgo: "Ororo Munroe",
    wiki: "http://x-men.wikia.com/wiki/Storm"
  }
];

export function Example() {
  return (
    <Xmen members={characters} squad="Gold" />
  );
}

export default Xmen;

// WORKSHOP_START
/*
eslint
no-unused-vars: 0,
no-undef: 0,
no-unused-expressions: 0
*/
// WORKSHOP_END
