import React from 'react'
import {storiesOf, action, linkTo} from '@kadira/storybook'
import padStart from 'lodash.padstart'

const exercises = [
  'props',
  'prop-types',
  'styling',
  'composition',
  'state',
]

exercises.forEach((exercise, i) => {
  const filename = `${padStart(i + 1, 2, '0')}-${exercise}`
  storiesOf('Exercises', module)
    .add(filename, require(`../exercises/${filename}`).example)

  storiesOf('Finished Exercises', module)
  .add(filename, require(`../exercises-final/${filename}`).example)
})
