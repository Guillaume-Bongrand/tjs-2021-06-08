import React from 'react';
import Button from './components/Button/Button';

/**
 * Main component of our app.
 */
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={counter:1, str: "Hola"}
  }
  componentDidUpdate(prev){
    console.log(this.state.counter);
  }
  render(){
    return <div className="App">
      <span>counter : {this.state.counter}</span>
      <Button type="object" title={this.state.str} clicker={(arg) =>{this.setState({counter: this.state.counter+1});}}></Button>
    </div>;
  }
}
export default App;