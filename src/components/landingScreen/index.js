
import React, { Component } from 'react';
// import config from '../../common/config';
import LayerOne from '../layerOne';
import LayerTwo from '../layerTwo'; 

export default class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {

  }

  render() {
    const self = this;
    const { state } = self;

    return (
      <div className="wrapper">
        <LayerOne />
        <LayerTwo />
      </div>
    );
  }
}