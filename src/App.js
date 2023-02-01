import React, { Component } from 'react';
import Home from './home';
// import serverReq from './RqData';

// var sr = new serverReq();

class App extends Component {
  state = {
    Submit: false
    } 
  render() { 
    if(this.state.Submit === false){
      return (
        <Home
        hasSubmit={()=> this.setState({Submit:true})}></Home>
      );
    }

    else{
      return(
        <div>
          <h1>LMAO</h1>
        </div>
      )
    }
  }
}
 
export default App;