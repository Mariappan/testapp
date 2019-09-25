import React, { Component } from 'react'; // let's also import Component
import './assets/clock.scss';

// the clock's state has one field: The current time, based upon the
// JavaScript class Date
export interface ClockState {
  time: Date,
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
    this.interval = null;
    this.state = { time: new Date(), seconds: 0, minutes: 0, hours: 12 }
    this.dump();
  }

  // The tick function sets the current state. TypeScript will let us know
  // which ones we are allowed to set.
  tick() {
    this.setState({
      time: new Date()
    });
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
    }, this.dump)
  }

  dump() {
    // console.log(`== MAARI == Time is`, this.state.hours, ":", this.state.minutes, ":", this.state.seconds);
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
    // Icon
    function IconUmbrella(props: any) {
      const little: number = ((props.little*30) + (props.big/2)) || 0
      const big: number = props.big * 6 || 0
      const fast: number = props.fast *6 || 0

      const rotatehand = (value: number) => {
        return "rotate(" + value + ",80,80)";
      }

      return (
        <svg viewBox="0 0 160 160" width="160pt" height="160pt">
          <defs>
            <clipPath id="_clipPath_IAv25CjndUvOTDrZhLzZ3EkaVHrkuZNf">
              <rect width="160" height="160" />
            </clipPath>
          </defs>
          <g clip-path="url(#_clipPath_IAv25CjndUvOTDrZhLzZ3EkaVHrkuZNf)">
            <circle vector-effect="non-scaling-stroke" cx="79.99999999999999" cy="79.99999999999999" r="70" fill="rgb(49,101,128)" stroke-width="1" stroke="rgb(0,0,0)" stroke-opacity="0.75" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <circle vector-effect="non-scaling-stroke" cx="80" cy="80" r="1" fill="none" stroke-width="1" stroke="rgb(202,233,246)" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="3" />
            <line x1="80" y1="80" x2="80" y2="20" transform = {rotatehand(fast)} vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(218,240,253)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <line x1="80" y1="80" x2="80" y2="20" transform = {rotatehand(big)} vector-effect="non-scaling-stroke" stroke-width="2" stroke="rgb(218,240,253)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <line x1="80" y1="40" x2="80" y2="80" transform = {rotatehand(little)} vector-effect="non-scaling-stroke" stroke-width="2" stroke="rgb(202,233,246)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
          </g>
        </svg>
      )
    }
    return <IconUmbrella fast={this.state.seconds} big={this.state.minutes} little={this.state.hours}/>
  }
}
