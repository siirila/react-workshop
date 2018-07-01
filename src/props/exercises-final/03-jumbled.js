import React from 'react';

function Xmen(props) {
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

