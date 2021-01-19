import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddPlants, Explore, MyPlants, Settings, Tasks } from "./pages"
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme"
import { GlobalStyles } from "./styles/global"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
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
    </ThemeProvider>
  );
}

export default App;
