//import Button from "./Button";
//import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import NewHome from "./routes/NewHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/" component={NewHome} exact />
        <Route path="/movie">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
