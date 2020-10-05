import React, { createContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body'
import Switch from 'react-bootstrap/esm/Switch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Registration from './Components/Registration/Registration';
import UserActivity from './Components/UserActivity/UserActivity';
import { Container } from 'react-bootstrap';
import VolunteerList from './Components/Admin/VolunteerList/VolunteerList';
import AdminHome from './Components/Admin/AminHome/AdminHome';
import NavBar from './Components/Header/NavBar';
export const serviceContext = createContext();
export const loginContext = createContext();
function App() {
  const [user, setUser] = useState({ email: "", name: "" })
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://radiant-cliffs-39414.herokuapp.com/getServices")
      .then(res => res.json())
      .then(data => setService(data))

  }, [service])
  return (
    <Container fluid style={{ backgroundColor: "#F8FAFC", minHeight: "600px" }}>
      <loginContext.Provider value={[user, setUser]}>
        <BrowserRouter >

          <serviceContext.Provider value={[service, setService]}>
          <NavBar />
            <Switch>
              <Route exact path='/'>
                <Header></Header>
                <Body></Body>
              </Route>
              <Route path='/home'>
                <Header></Header>
                <Body></Body>
              </Route>
              <PrivateRoute path='/service/:id'>

                <Registration></Registration>

              </PrivateRoute>
              <Route path="/login">
              
                <Login></Login>
              </Route>
              <Route path="/admin">
                 <AdminHome/>
              </Route>
              <Route path="/user-activity">
                {user.email ? (<UserActivity />) :( <Login />)}

              </Route>

            </Switch>
          </serviceContext.Provider>
        </BrowserRouter>

      </loginContext.Provider>
    </Container>
  );
}

export default App;
