import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route to='/' component={Home}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
