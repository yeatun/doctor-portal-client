import React from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./component/Home/Home/Home";
import Appointment from "./component/Appointment/Appoinetment/Appointment";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path= "/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path= "/dashboard/appointment">
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
