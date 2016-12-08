import {configure, storiesOf, action, linkTo} from '@kadira/storybook'
import padStart from 'lodash.padstart'
import '../src/index.css'

configure(loadStories, module)

function loadStories() {
  storiesOf('Exercises', module)
    .add('props', require('../src/exercises/01-props').example)
    .add('prop-types', require('../src/exercises/02-prop-types').example)
    .add('styling', require('../src/exercises/03-styling').example)
    .add('composition', require('../src/exercises/04-composition').example)
    .add('state', require('../src/exercises/05-state').example)
    .add('data-fetching', require('../src/exercises/06-data-fetching').example)
    .add('render-callback', require('../src/exercises/07-render-callback').example)
  
  storiesOf('Finished Exercises', module)
    .add('props', require('../src/exercises-final/01-props').example)
    .add('prop-types', require('../src/exercises-final/02-prop-types').example)
    .add('styling', require('../src/exercises-final/03-styling').example)
    .add('composition', require('../src/exercises-final/04-composition').example)
    .add('state', require('../src/exercises-final/05-state').example)
    .add('data-fetching', require('../src/exercises-final/06-data-fetching').example)
    .add('render-callback', require('../src/exercises-final/07-render-callback').example)
}
