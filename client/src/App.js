import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Home for MERN CRUD action</h1>
        <Link to="/">Home</Link>
        <Link to="/read">Read</Link>
        <Link to="/create">Create</Link>
      </div>
      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/read">
          <Read />
        </Route>
        <Route path="/update/:id">
          <Update />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
