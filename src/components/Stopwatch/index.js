import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {TIMER: new Date(), startTime: null}

  componentDidMount() {
    this.TimerInterval = setInterval(this.timer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.TimerInterval)
  }

  timer = () => {
    const {startTime} = this.state
    const PresentTime = new Date()
    if (startTime) {
      const TIME = new Date(PresentTime - startTime)
      this.setState({TIMER: TIME})
    } else {
      this.setState({TIMER: PresentTime})
    }
  }

  startTime = () => {
    clearInterval(this.TimerInterval)
    const {startTime} = this.state
    if (!startTime) {
      this.setState({startTime: new Date()})
    } else {
      this.setState({startTime: null, TIMER: new Date()})
    }
  }

  stopTime = () => {
    console.log('stop clicked')
    clearInterval(this.TimerInterval)
  }

  resetTime = () => {
    console.log('reset clicked')
    this.setState({startTime: null, TIMER: new Date()})
  }

  render() {
    const {TIMER} = this.state

    const minutes = TIMER.getMinutes().toString().padStart(2, '0')
    const seconds = TIMER.getSeconds().toString().padStart(2, '0')

    return (
      <div className="bg-Img">
        <h1>Stopwatch</h1>
        <div className="watch-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
          />
          <p>Timer</p>
          <h1>
            {minutes}: {seconds}
          </h1>
          <div className="xx">
            <button onClick={this.startTime} type="button" className="start">
              Start
            </button>
            <button onClick={this.stopTime} type="button" className="stop">
              Stop
            </button>
            <button onClick={this.resetTime} type="button" className="reset">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
