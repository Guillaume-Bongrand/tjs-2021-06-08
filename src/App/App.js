import './App.css';
import Button from './components/Button/Button'
function App() {
  return (
    <div className="App">
      Hola guapo
      <hr/>
      <Button title="Vamos" type="verb"></Button>
      <Button title="A" type="particule"></Button>
      <Button type="action"><img src="https://cdn2.iconfinder.com/data/icons/new-year-s-hand-drawn-basic/64/dancer_2-256.png" alt="click"/></Button>
    </div>
    
  );
}

export default App;
