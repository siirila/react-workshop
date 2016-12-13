import {configure, storiesOf, action, linkTo} from '@kadira/storybook'
import padStart from 'lodash.padstart'
import '../src/index.css'

configure(loadStories, module)

function loadStories() {
  storiesOf('Exercises', module)
    .add('1. Props', require('../src/exercises/01-props').example)
    .add('2. PropTypes', require('../src/exercises/02-prop-types').example)
    .add('3. Styling', require('../src/exercises/03-styling').example)
    .add('4. Composition', require('../src/exercises/04-composition').example)
    .add('5. Component API', require('../src/exercises/05-component-api').example)
    .add('6. State', require('../src/exercises/06-state').example)
    .add('7. Uncontrolled Form', require('../src/exercises/07-uncontrolled-form').example)
    .add('8. Controlled Form', require('../src/exercises/08-controlled-form').example)
    .add('9. Data Fetching', require('../src/exercises/09-data-fetching').example)
    .add('10. Higher Order Component', require('../src/exercises/10-hoc').example)
    .add('11. Render Callback', require('../src/exercises/11-render-callback').example)
    // .add('12. Context', require('../src/exercises/12-context').example)
    // .add('13. cloneElement', require('../src/exercises/13-clone-element').example)
    // .add('14. React.Children', require('../src/exercises/14-react-children').example)

  storiesOf('Finished Exercises', module)
    .add('1. Props', require('../src/exercises-final/01-props').example)
    .add('2. PropTypes', require('../src/exercises-final/02-prop-types').example)
    .add('3. Styling', require('../src/exercises-final/03-styling').example)
    .add('4. Composition', require('../src/exercises-final/04-composition').example)
    .add('5. Component API', require('../src/exercises-final/05-component-api').example)
    .add('6. State', require('../src/exercises-final/06-state').example)
    .add('7. Uncontrolled Form', require('../src/exercises-final/07-uncontrolled-form').example)
    .add('8. Controlled Form', require('../src/exercises-final/08-controlled-form').example)
    .add('9. Data Fetching', require('../src/exercises-final/09-data-fetching').example)
    .add('10. Higher Order Component', require('../src/exercises-final/10-hoc').example)
    .add('11. Render Callback', require('../src/exercises-final/11-render-callback').example)
    // .add('12. Context', require('../src/exercises-final/12-context').example)
    // .add('13. cloneElement', require('../src/exercises-final/13-clone-element').example)
    // .add('14. React.Children', require('../src/exercises-final/14-react-children').example)
}
