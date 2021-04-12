import React,{ createContext, useState } from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./component/Home/Home/Home";
import Appointment from "./component/Appointment/Appoinetment/Appointment";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import AddDoctors from "./component/AddDoctors/AddDoctors";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/Login/PrivateRoute";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path= "/appointment">
          <Appointment></Appointment>
        </Route>
        <PrivateRoute path= "/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
      
        <Route path= "/addDoctors">
          <AddDoctors></AddDoctors>
        </Route>
        <Route path= "/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
