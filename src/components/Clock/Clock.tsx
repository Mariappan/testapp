import React, { Component } from 'react'; // let's also import Component
import { ClockSVG } from './DigitalClock';

// the clock's state has one field: The current time, based upon the
// JavaScript class Date
export interface ClockState {
  hours: number,
  minutes: number,
  seconds: number
}

export interface ClockSVGProps {
  hours: number;
  minutes: number;
  seconds: number;
}

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
export class Clock extends Component<{}, ClockState> {
  private timerId: number | null;

  constructor(props: any) {
    super(props);
    const date = new Date();
    const formatHours = (hours: number) => {
      return (hours > 12) ? (hours - 12) : (hours ? hours : 12)
    }

    this.state = {
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hours: formatHours(date.getHours())
    }
    this.timerId = null;
  }

  // The tick function sets the current state. TypeScript will let us know
  // which ones we are allowed to set.
  private clock_tick() {
    this.setState(state => {
      let { seconds, minutes, hours } = state;
      seconds++; // Increment second
      seconds = (seconds === 60) ? minutes++ && 0 : seconds;
      minutes = (minutes === 60) ? hours++ && 0 : minutes;
      hours = (hours === 13) ? 1 : hours;
      return { seconds, minutes, hours };
    })
  }

  // After the component did mount, we set the state each second.
  componentDidMount() {
    this.timerId = window.setInterval(() => this.clock_tick(), 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  onClickButton1(event: any) {
    console.log("Event", event);
  }

  // render will know everything!
  render() {
    return (
      <>
        {/* <button onClick={this.onClickButton1}>
          Clock
        </button> */}
        <ClockSVG seconds={this.state.seconds} minutes={this.state.minutes} hours={this.state.hours} />
      </>
    )
  }
}
