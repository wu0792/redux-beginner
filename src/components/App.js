import React, { Component } from 'react';
import CounterListWrapper from '../containers/CounterListWrapper';
import OperHandler from '../containers/OperHandlerWrapper';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <OperHandler />
        <CounterListWrapper />
      </div>
    );
  }
}

export default App;
