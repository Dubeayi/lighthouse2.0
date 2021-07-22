
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import Service from "views/service.js";
import AboutUs from "views/aboutUs.js";
// others

ReactDOM.render(
  <BrowserRouter baseName>
    <Switch>
      <Route path="/home"
      render={(props) => <Index {...props} />}
      />
      <Route
        path="/service"
        render={(props) => <Service {...props} />}
      />
      <Route
        path="/aboutUs"
        render={(props) => <AboutUs {...props} />}
      />
            {/* <Route
        path="/rules"
        render={(props) => <SectionRules {...props} />}
      />
      <Route
        path="/schedule_meal"
        render={(props) => <SectionScheduleMeal {...props} />}
        />
        <Route
        path="/timetable"
        render={(props) => <SectionTimetable {...props} />}
        />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
        <Route
        path="/contact-us"
        render={(props) => <ContactUs {...props} />}
      /> */}
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
