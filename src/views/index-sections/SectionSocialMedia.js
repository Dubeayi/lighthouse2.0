import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// import LogoDark from "assets/img/logo/logoDark.svg";
// reactstrap components
import {
//   Button,

  NavItem,
  NavLink,

} from "reactstrap";
import { Link } from "react-router-dom";

const SectionSocialMedia = () => {
  return (
    <>
        <NavItem>
          <NavLink
            data-placement="bottom"
            href="#"
            target="_blank"
            title="Follow us on Twitter"
          >
            <i className="fa fa-twitter" />
            <p className="d-lg-none">Twitter</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            data-placement="bottom"
            href="#"
            target="_blank"
            title="Like us on Facebook"
          >
            <i className="fa fa-facebook-square" />
            <p className="d-lg-none">Facebook</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            data-placement="bottom"
            href="#"
            target="_blank"
            title="Follow us on Instagram"
          >
            <i className="fa fa-instagram" />
            <p className="d-lg-none">Instagram</p>
          </NavLink>
        </NavItem>
    </>
  );
};

export default SectionSocialMedia;