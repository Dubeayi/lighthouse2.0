import React from "react";
import { NavItem, NavLink } from "reactstrap";

const SectionSocialMedia = () => {
  return (
    <>
      <NavItem>
        <NavLink
          data-placement="bottom"
          href="https://twitter.com/lighthouselekki"
          target="https://twitter.com/lighthouselekki"
          title="Follow us on Twitter"
        >
          <i className="fa fa-twitter" />
          <p className="d-lg-none">Twitter</p>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          data-placement="bottom"
          href="https://web.facebook.com/profile.php?id=100070266453006"
          target="https://web.facebook.com/profile.php?id=100070266453006"
          title="Like us on Facebook"
        >
          <i className="fa fa-facebook-square" />
          <p className="d-lg-none">Facebook</p>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          data-placement="bottom"
          href="https://www.instagram.com/lighthouselekki/"
          target="https://www.instagram.com/lighthouselekki/"
          title="Follow us on Instagram"
        >
          <i className="fa fa-instagram" />
          <p className="d-lg-none">Instagram</p>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          data-placement="bottom"
          href="https://www.linkedin.com/in/lighthouselekki"
          target="https://www.linkedin.com/in/lighthouselekki"
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