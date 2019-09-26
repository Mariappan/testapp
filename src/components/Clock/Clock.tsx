import React, { Component } from 'react'; // let's also import Component
import './assets/clock.scss';
import { ClockIcon } from './ClockIcon';

// the clock's state has one field: The current time, based upon the
// JavaScript class Date
export interface ClockState {
  hours: number,
  minutes: number,
  seconds: number
}

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
export class Clock extends Component<{}, ClockState> {
  private interval: number | null;

  constructor(props: any) {
    super(props);
    const date = new Date();
    const formatHours = (hours: number) => {
      return hours > 12 ? hours - 12 : (hours ? hours : 12)
    }

    this.state = {
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hours: formatHours(date.getHours())
    }
    this.interval = null;
  }

  // The tick function sets the current state. TypeScript will let us know
  // which ones we are allowed to set.
  tick() {
    this.setState(state => {
      let sec: number = state.seconds;
      let min: number = state.minutes;
      let hr: number = state.hours;
      sec++;
      if (sec >= 60) {
        sec = 0;
        min++;
      }
      if (min >= 60) {
        min = 0;
        hr++;
      }
      if (hr >= 13) {
        hr = 1;
      }
      return {
        seconds: sec,
        minutes: min,
        hours: hr
      }
    })
  }

  // After the component did mount, we set the state each second.
  componentDidMount() {
    this.interval = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
  }

  // render will know everything!
  render() {
    return <ClockIcon fast={this.state.seconds} big={this.state.minutes} little={this.state.hours} />
  }
}
