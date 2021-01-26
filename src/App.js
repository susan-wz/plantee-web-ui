import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddPlants, Explore, MyPlants, Settings, Tasks, NotFound } from "./pages"
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme"
import { GlobalStyles } from "./styles/global"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Tasks />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/my_plants">
            <MyPlants />
          </Route>
          <Route exact path="/add_plants">
            <AddPlants />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route path="/:404">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
