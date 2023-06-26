import { Container, Grid } from "@mui/material";
import React from "react";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Certificate from "./pages/Certificate/certi";
import Contact from "./pages/Contact/Contact";
import { Map, GoogleApiWrapper } from "google-maps-react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={7}>
        <Grid item lg={3} md={4} xs={12} sm={12}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main_content container_shadow">
              <Switch>
                {/*<Route path = "/Contact">
                  <Contact />
  </Route>*/}
                <Route path="/Portfolio">
                  <Portfolio />
                </Route>
                <Route path="/Certificate">
                  <Certificate />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
