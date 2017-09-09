import React, {Component} from 'react'
import PropTypes from 'prop-types'

class NameForm extends Component {
  static propTypes = {
    defaultName: PropTypes.string,
  }

  handleSubmit = event => {
    alert(`A name was submitted: ${this.input.value}`) // eslint-disable-line no-alert
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            defaultValue={this.props.defaultName}
            ref={node => (this.input = node)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export const example = () => <NameForm defaultName="Marcy" />

export default NameForm
