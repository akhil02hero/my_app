import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Spinner from "./images/Spinner.svg";
import BackgroundChanger from "./components/BackgroundChanger";

const WaterTracker = lazy(() => import("./components/WaterTracker.js"));
const FCal = lazy(() => import("./components/BMICalculator.js"));
const About = lazy(() => import("./components/About.js"));

const App = () => {
  return (
    <Router>
      <BackgroundChanger />
      <Suspense fallback={<img src={Spinner} alt="Loading"></img>}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/waterlevel" component={WaterTracker} />
          <Route path="/fitnesscalc" component={FCal} />
          <Route path="/about" component={About} />
          {/* Add other routes here */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
