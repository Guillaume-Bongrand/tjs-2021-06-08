import React from 'react';
import FlexLayout from './components/FlexLayout/FlexLayout';
import FlowLayout from './components/FlowLayout/FlowLayout';
import MemeViewer from './components/MemeViewer/MemeViewer';
import MemForm from './components/MemForm/MemForm';
import { REST_ADR_SRV } from './config/config';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import store, {globalInitialState, initialState, PUBLIC_ACTION_CURRENT} from './store/store'
/**
 * Main component of our app.
 */
class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      ...initialState,
      ...globalInitialState
    };
  }
  componentDidMount(){

    this.setState({ ...store.getState().meme, ...store.getState().datas});
    store.subscribe(() =>{
      this.setState({...store.getState().meme, ...store.getState().datas});
    })

  }
  render(){
    console.log("du texte", this.state);
    return <>
    <Header/><div className="App">
      <FlowLayout>
        {this.state.memes.map((elem,i)=><MemeViewer key={'meme='+i} meme={{
          ...elem,
          image: this.state.images.find(e => e.id === elem.imageId)
        }} />)}
      </FlowLayout>
      
      <FlexLayout>
        <div>
          <MemeViewer meme={{...this.state.current, image:this.state.images.find(e=>e.id===this.state.current.imageId)}} />
        </div>
        <MemForm images={this.state.images} onSubmit={formState => this.setState({current: formState})} />
      </FlexLayout>
      <Footer />
    </div></>;
  }
}
export default App;