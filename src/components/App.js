import React, { Component } from 'react';
import CounterWrapper from '../containers/CounterWrapper';
import OperHandler from '../containers/OperHandlerWrapper';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    //let counterList = this.getCounterEls();
    return (
      <div>
        <OperHandler />
        <CounterWrapper />
      </div>
    );
  }
}

export default App;
