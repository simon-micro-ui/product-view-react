import React, { Component } from 'react';
import Cart from './Cart';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div id="appRoot">

        <Cart />

      </div>
    );
  }
}
export default App;