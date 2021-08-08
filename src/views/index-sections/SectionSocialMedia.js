import React from "react";
import { NavItem, NavLink } from "reactstrap";

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
        <NavItem>
          <NavLink
            data-placement="bottom"
            href="#"
            target="_blank"
            title="Follow us on LinkedIn"
          >
            <i className="fa fa-linkedin" />
            <p className="d-lg-none">LinkedIn</p>
          </NavLink>
        </NavItem>
    </>
  );
};

export default SectionSocialMedia;