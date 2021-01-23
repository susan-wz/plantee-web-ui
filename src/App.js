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
          <Route exact path="/" component={Tasks} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/my_plants" component={MyPlants} />
          <Route exact path="/add_plants" component={AddPlants} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
