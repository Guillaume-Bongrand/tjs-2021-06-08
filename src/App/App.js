import React from 'react';
import FlexLayout from './components/FlexLayout/FlexLayout';
import MemForm from './components/MemForm/MemForm';
/**
 * Main component of our app.
 */
class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {current: {tritre: '', x:0, y:0, text: '', image: 0}};
  }
  render(){
    return <div className="App">
      <FlexLayout>
        <div>
        </div>
        <MemForm onSubmit={formState => this.setState({current: formState})} />
      </FlexLayout>
      {JSON.stringify(this.state)}
    </div>;
  }
}
export default App;