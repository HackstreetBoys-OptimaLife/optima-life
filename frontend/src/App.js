import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

