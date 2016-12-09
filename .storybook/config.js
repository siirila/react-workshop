import {configure, storiesOf, action, linkTo} from '@kadira/storybook'
import padStart from 'lodash.padstart'
import '../src/index.css'

configure(loadStories, module)

function loadStories() {
  storiesOf('Exercises', module)
    .add('Props', require('../src/exercises/01-props').example)
    .add('PropTypes', require('../src/exercises/02-prop-types').example)
    .add('Styling', require('../src/exercises/03-styling').example)
    .add('Composition', require('../src/exercises/04-composition').example)
    .add('State', require('../src/exercises/05-state').example)
    .add('Uncontrolled Form', require('../src/exercises/06-uncontrolled-form').example)
    .add('Controlled Form', require('../src/exercises/07-controlled-form').example)
    .add('Data Fetching', require('../src/exercises/08-data-fetching').example)
    .add('Higher Order Component', require('../src/exercises/09-hoc').example)
    .add('Render Callback', require('../src/exercises/10-render-callback').example)
  
  storiesOf('Finished Exercises', module)
    .add('Props', require('../src/exercises-final/01-props').example)
    .add('PropTypes', require('../src/exercises-final/02-prop-types').example)
    .add('Styling', require('../src/exercises-final/03-styling').example)
    .add('Composition', require('../src/exercises-final/04-composition').example)
    .add('State', require('../src/exercises-final/05-state').example)
    .add('Uncontrolled Form', require('../src/exercises-final/06-uncontrolled-form').example)
    .add('Controlled Form', require('../src/exercises-final/07-controlled-form').example)
    .add('Data Fetching', require('../src/exercises-final/08-data-fetching').example)
    .add('Higher Order Component', require('../src/exercises-final/09-hoc').example)
    .add('Render Callback', require('../src/exercises-final/10-render-callback').example)
}
