import React, {Component, PropTypes} from 'react'

// Pretty much every application is going to need to do something with forms
// There are two ways to handle forms elements with React.
// First, there's Uncontrolled inputs. They're arguably easier, but less powerful.
//
// The basic idea of uncontrolled components is you pull the value out of the DOM
// element when you need it. To do this, you need to get a reference to the element.
// You can either get a reference via an event handler `event` argument (`event.target`),
// or by using the special `ref` prop on the element like so:
//
//     <input ref={node => this.input = node} />
//
// From there you can reference the input node elsewhere in your component methods.
//
// Exercise
//   Render a form with an onSubmit handler that alerts the value of an input
//   Render a red error message via `this.props.getErrorMessage(value)` if one is returned, otherwise render the submit button
//   Don't let the user submit the form if there's an error
//
// Tips:
// - You'll want to keep `error` in state so you can check it when the form is submitted.

class NameForm extends React.Component {
  render() {
    return <div>Give it a go!</div>
  }
}

export const example = () => (
  <NameForm
    getErrorMessage={value => {
      if (value.length < 3) {
        return `Value must be at least 3 characters, but is only ${value.length}`
      }
      if (!value.includes('s')) {
        return `Value does not include "s" but it should!`
      }
      return null
    }}
  />
)

export default NameForm
