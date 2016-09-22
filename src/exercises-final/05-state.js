import React from 'react'
import './05-state.css'



class StopWatch extends React.Component {
  state = {
    running: false,
    lapse: 0,
  }

  _now = 0
  _timer = null

  handleRunClick = () => {
    if (this.state.running) {
      this.stop()
    } else {
      this.start()
    }
  }

  handleClearClick = () => {
    this.stop()
    this._now = 0
    this.setState({lapse: 0})
  }

  start() {
    this._timer = setInterval(() => {
      this.setState({
        lapse: Date.now() - this._now,
      })
    })

    this._now = Date.now() - this.state.lapse
    this.setState({running: true})
  }

  stop() {
    clearInterval(this._timer)
    this._timer = null
    this.setState({running: false})
  }

  render() {
    return (
      <div className="StopWatch">
        <label>{this.state.lapse}ms</label>
        <button onClick={this.handleRunClick}>{this.state.running ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleClearClick}>Clear</button>
      </div>
    )
  }
}

// We don't need to do anything fancy here even with props, because the <StopWatch /> component tracks its own state!
export const example = () => (
  <StopWatch />
)

export default StopWatch
