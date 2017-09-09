import React, {Component} from 'react'
import PropTypes from 'prop-types'

class NameForm extends Component {
  state = {value: ''}
  static propTypes = {
    getErrorMessage: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.onValueChange()
  }

  handleChange = event => {
    const {value} = event.target
    this.onValueChange(value)
  }

  handleSubmit = event => {
    if (!this.state.error) {
      alert(`A name was submitted: ${this.state.value}`) // eslint-disable-line no-alert
    }
    event.preventDefault()
  }

  onValueChange(value = this.state.value) {
    const error = this.props.getErrorMessage(value)
    this.setState({value, error})
  }

  render() {
    const {value, error} = this.state
    const hasError = Boolean(error)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        {hasError ? (
          <div style={{color: 'red'}}>{error}</div>
        ) : (
          <input type="submit" value="Submit" />
        )}
      </form>
    )
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
