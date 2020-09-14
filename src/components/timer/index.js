import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    let self = this;
    let { props } = self;
    let { dd, mm , yy } = props;
    let dateObj = new Date();
    let calculatedYear = (dateObj.getFullYear() - yy);
    let calculatedMonth = ((dateObj.getMonth() + 1) - mm);
    let calculatedDate = (dateObj.getDate() - dd);
    console.log(calculatedYear,calculatedMonth, calculatedDate);
    return <span>{`${calculatedYear} years ${calculatedMonth} months ${calculatedDate} days`}</span>
  }
}

