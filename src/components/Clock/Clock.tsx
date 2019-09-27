import React, { Component } from 'react'; // let's also import Component

import { ClockSVG as AnalogClock1 } from './AnalogClock1';
import { ClockSVG as AnalogClock2 } from './AnalogClock2';
import { ClockSVG as AnalogClock3 } from './AnalogClock3';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

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
  private formatHours = (hours: number) => {
    return (hours > 12) ? (hours - 12) : (hours ? hours : 12)
  }

  constructor(props: any) {
    super(props);
    const date = new Date();
    
    this.state = {
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hours: this.formatHours(date.getHours())
    }
    this.onClickAction = this.onClickAction.bind(this);
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

  onClickAction(event: any) {
    const date = new Date();
    
    this.setState(state => {
      return {
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: this.formatHours(date.getHours())
      }
    })
  }

  // render will know everything!
  render() {
    return (
      <div onClick={this.onClickAction}>
        <Tabs defaultIndex={2}>
          <TabList>
            <Tab>0.1</Tab>
            <Tab>0.2</Tab>
            <Tab>1.0</Tab>
          </TabList>

          <TabPanel>
            <AnalogClock1 seconds={this.state.seconds} minutes={this.state.minutes} hours={this.state.hours} />
          </TabPanel>
          <TabPanel>
            <AnalogClock2 seconds={this.state.seconds} minutes={this.state.minutes} hours={this.state.hours} />
          </TabPanel>
          <TabPanel>
            <AnalogClock3 seconds={this.state.seconds} minutes={this.state.minutes} hours={this.state.hours} />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}
