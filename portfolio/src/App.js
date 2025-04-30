import  './App.css';
import Header from './components/header.jsx';
import Counter from './components/counter.jsx';
import ToggleMessage from './components/toggle.jsx';
import Event from './components/event.jsx'

function App() {
  return (
    <div className="App">
      <Header name='Praveen' job='Developer'/>
      <Event/>
      <Counter/>
      <ToggleMessage/>
    </div>
  );
}

export default App;
