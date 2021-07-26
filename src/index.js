
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
import AboutUs from "views/AboutUs.js";
import Timetable from "views/timetable.js";
import ScheduleMeal from "views/ScheduleMeal.js";
import ClientCharacteristics from "views/ClientCharacteristics.js";
import ScrollToTop from "views/ScrollToTop.js";
import LighthouseRules from "views/LighthouseRules.js";
import ContactUs from 'views/ContactUs.js';
import ProhibitedItems from "views/prohibitedItems.js";

ReactDOM.render(
  <BrowserRouter baseName>
    <ScrollToTop>
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
      <Route
        path="/timetable"
        render={(props) => <Timetable {...props} />}
      />
        <Route
        path="/meal_plan"
        render={(props) => <ScheduleMeal {...props} />}
      />
        <Route
        path="/client_char"
        render={(props) => <ClientCharacteristics {...props} />}
      />
        <Route
        path="/lighthouse_rules"
        render={(props) => <LighthouseRules {...props} />}
      />
        <Route
        path="/contact_us"
        render={(props) => <ContactUs {...props} />}
      />
        <Route
        path="/prohibited_items"
        render={(props) => <ProhibitedItems {...props} />}
      />
      {/* <Route
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
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
