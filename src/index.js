
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Sample from "views/index-sections/random.js";
import ContactUs from './components/Navbars/ContactUs.js';
import SectionServices from 'views/index-sections/SectionServices.js';
import SectionRules from 'views/index-sections/SectionRules.js';

// others

ReactDOM.render(
  <BrowserRouter baseName>
    <Switch>
      <Route path="/home" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/sample"
        render={(props) => <Sample{...props} />}
      />
        <Route
        path="/services"
        render={(props) => <SectionServices {...props} />}
      />
      <Route
        path="/rules"
        render={(props) => <SectionRules {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
        <Route
        path="/contact-us"
        render={(props) => <ContactUs {...props} />}
      />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>, 
  document.getElementById("root")
);
