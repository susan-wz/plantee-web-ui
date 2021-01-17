import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AddPlants, Explore, MyPlants, Settings, Tasks } from "./pages"

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Tasks</Link>
          </li>
          <li>
            <Link to="/explore">Explore Plants</Link>
          </li>
          <li>
            <Link to="/my_plants">My Plants</Link>
          </li>
          <li>
            <Link to="/add_plants">Add Plants</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/">
          <Tasks />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/my_plants">
          <MyPlants />
        </Route>
        <Route path="/add_plants">
          <AddPlants />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
