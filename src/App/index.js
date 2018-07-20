import React, { Component } from 'react';
import Block from './Block';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.state = {
      flowerText: '',
    }
  }
  changeText(text) {
    this.setState({
      flowerText: text,
    });
  }
  render() {
    const { changeText } = this;
    const { flowerText } = this.state;
    return(
      <div id="appRoot">
        <Block color="red" text="Red Rose Updated" changeText={changeText} />
        <Block color="blue" text="Blue Iris" changeText={changeText} />
        <div id="appRoot__flower">{flowerText}</div>
      </div>
    );
  }
}
export default App;
