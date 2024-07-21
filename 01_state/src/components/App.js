import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'seiji'};
  }
  
  // Define handleClick method
  handleClick(name) {
    this.setState({name:name});
  }
  
  render() {
    return (
    	<div>
    	  <h1>Hi, {this.state.name}！</h1>
    	  {/* onClick event: calling handleClick method*/}
        <button onClick={() => {this.handleClick("super men")}}>super men</button>        
        <button onClick={() => {this.handleClick("seiji")}}>seiji</button>
        
      </div>
    );
  }
}

export default App;
