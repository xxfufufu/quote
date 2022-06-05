import './App.css';
import Random from './component/Random';
import ViewAllQuotes from './component/ViewAllQuotes';
import ViewRandom from './component/ViewRandom'
import { useSelector } from 'react-redux'



function App() {

  const view = useSelector(state => state.view)

  return (
    <div className="App">
      <div className="app-container">
        <Random />
        {view ? <ViewRandom /> : <ViewAllQuotes />} 
      </div>
    </div> 
  );
}

export default App;
