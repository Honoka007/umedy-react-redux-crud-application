import React, { Component } from 'react';
import { AST_Return } from 'terser';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => { console.log ("I am clicked")}}/>
      </React.Fragment>
    )
  }
}

export default App;
