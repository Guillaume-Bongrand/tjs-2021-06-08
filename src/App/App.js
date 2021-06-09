import React from 'react';
import FlexLayout from './components/FlexLayout/FlexLayout';
import MemeViewer from './components/MemeViewer/MemeViewer';
import MemForm from './components/MemForm/MemForm';
import { REST_ADR_SRV } from './config/config';
/**
 * Main component of our app.
 */
class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {current: {titre: '', x:0, y:0, text: '', imageId: 0, fontSize: 0, color:'#0000000'}, images: []};
  }
  componentDidMount(){
    fetch(`${REST_ADR_SRV}/images`)
      .then(flux => flux.json())
      .then(arr => this.setState({images: arr}))
  }
  render(){
    return <div className="App">
      <FlexLayout>
        <div>
          <MemeViewer meme={{...this.state.current, image:this.state.images.find(e=>e.id===this.state.current.imageId)}} />
        </div>
        <MemForm images={this.state.images} onSubmit={formState => this.setState({current: formState})} />
      </FlexLayout>
    </div>;
  }
}
export default App;