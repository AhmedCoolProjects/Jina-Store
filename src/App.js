import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/DashboardP";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard category="Dashboard" />
          </Route>
          <Route exact path="/men">
            <Dashboard category="Men" />
          </Route>
          <Route exact path="/women">
            <Dashboard category="Women" />
          </Route>
          <Route exact path="/kids">
            <Dashboard category="Kids" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
