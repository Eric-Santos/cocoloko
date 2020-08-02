import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

const Home = lazy(() => import("./components/Home.js"));
const Navbar = lazy(() => import("./components/Navbar.js"));
const Menu = lazy(() => import("./components/Menu.js"));
const Contact = lazy(() => import("./components/Contact.js"));

function App() {
  return (
    <div className="background-color">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
