import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import HomeScreen from './HomeScreen';
import FinalScreen from './FinalScreen';

export default function App() {
  return (
    <Router>
      <Switch>
      <Route path="/game/finish">
          <FinalScreen />
        </Route>
        <Route path="/game/start">
          <HomeScreen />
        </Route>
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

