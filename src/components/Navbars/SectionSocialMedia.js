import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

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