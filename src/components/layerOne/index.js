import React, { Component } from 'react';
import config from '../../common/config';
import Timer from '../timer';

export default class LayerOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideShowCursor: false
    }
  }
  componentDidMount() {
    // setInterval(() => {
    //   if(this.state.hideShowCursor) {
    //     this.setState({
    //       hideShowCursor: false
    //     })
    //   } else {
    //     this.setState({
    //       hideShowCursor: true
    //     })
    //   }
    // }, 200);
  }

  render() {
    let self = this;
    const { state } = self;
    const { hideShowCursor } = state;
    let blinkClass = hideShowCursor ? 'hide' : 'show';
    let profileUrl = `url(${config.IMG_BASE}/profile_bw${config.IMG_EXT['jpg']})`
    let mainBg = {
      className: 'bg__main',
      style: {
        backgroundImage: profileUrl
      }
    }



    return (
      <div className="bg__layer__One">
        <div {...mainBg}>
          <div className="info">
            <h1 className="title bitFont">Hello world<span className={`cursor ${blinkClass}`}>_</span></h1>
            <p>
              var name = Siddhesh Ravindra Kasar;
            </p>
            <p>
              var age = {<Timer dd="08" mm="01" yy="1996" />};
            </p>
          </div>
        </div>
      </div>
    )
  }
}