import React, { Component } from 'react';
import LandingScreen from '../../components/landingScreen';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goAhead: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ goAhead: true });
    }, 1000)
  }

  render() {
    const self = this;
    const { state } = self;
    const { goAhead } = state;

    return (goAhead ? <LandingScreen /> : <div className="center_align bitFont">Loading...</div>);
  }
}