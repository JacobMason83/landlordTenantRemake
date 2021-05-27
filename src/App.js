import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { useStateValue } from './helpers/StateProvider'
import Header from './components/Header';



const App = () => {
  const {user} = useStateValue()
  return (
    <div className="App">
    <Router>
      <Switch>
      <Header/>
      {!user ? (
        <Route to='/' component={Home}/>

      ): (
        <Route to='/dashboard' component={Dashboard} />

      )}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
