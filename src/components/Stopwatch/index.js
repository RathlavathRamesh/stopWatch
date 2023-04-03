// Write your code here'
import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {mins: 0, seconds: 0}
  }

  startClock = () => {
    this.timerId = setInterval(this.time, 1000)
  }

  time = () => {
    const {mins, seconds} = this.state
    this.setState(prev => {
      if (seconds === 59) {
        return {mins: prev.mins + 1, seconds: 0}
      }
      return {seconds: prev.seconds + 1}
    })
  }

  stopClock = () => {
    clearInterval(this.timerId)
  }

  resetClock = () => {
    clearInterval(this.timerId)
    this.setState({mins: 0, seconds: 0})
  }

  render() {
    const {mins, seconds} = this.state
    const fm = mins < 10 ? `0${mins}` : mins
    const fs = seconds < 10 ? `0${seconds}` : seconds
    return (
      <div className="bgContainer">
        <h1 className="heading">StopWatch</h1>
        <div className="watchCard">
          <div className="timeCard">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer"
            />
            <p className="para">Timer</p>
            <br />
          </div>
          <h1 className="heading2">
            {fm}:{fs}
          </h1>
          <div className="btns">
            <button type="button" className="btn1" onClick={this.startClock}>
              Start
            </button>
            <button type="button" className="btn2" onClick={this.stopClock}>
              Stop
            </button>
            <button type="button" className="btn3" onClick={this.resetClock}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
