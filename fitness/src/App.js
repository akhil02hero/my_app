import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Spinner from "./images/Spinner.svg";

const WaterTracker = lazy(() => import("./components/WaterTracker.js"));
const FCal = lazy(() => import("./components/Calculators.js"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<img src={Spinner} alt="Loading"></img>}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/waterlevel" component={WaterTracker} />
          <Route path="/fitnesscalc" component={FCal} />
          {/* Add other routes here */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
