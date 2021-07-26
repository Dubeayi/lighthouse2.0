import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import LogoDark from "assets/img/logo/logoDark.svg";
import SocialMedia from "views/index-sections/SectionSocialMedia.js";
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
import { Link } from "react-router-dom";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [lighthouseLogo, setLighthouseLogo] = React.useState(
    "lighthouseLogoHidden"
  );
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      //make the navbar visible after scrolling past the landing image
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
        setLighthouseLogo("lighthouseLogo");
      }
      //set the navbar back to being transparent if scrolling back up to the landing image
      else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
        setLighthouseLogo("lighthouseLogoHidden");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            title="Coded by Dubeayi O"
            className={classnames(lighthouseLogo)}
            style={{
              backgroundImage: `url(${LogoDark})`,
              // fontSize: "2.3em"
            }}
          ></NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={(e) => e.preventDefault()}
                role="button"
              >
                <i className="nc-icon nc-book-bookmark" /> Menu Items
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >
                <DropdownItem header tag="span">
                  Lighthouse
                </DropdownItem>
                <Link to="/index" style={{ color: "black" }}>
                  <DropdownItem>Homepage</DropdownItem>
                </Link>
                <Link to="/service" style={{ color: "black" }}>
                  <DropdownItem>Services</DropdownItem>
                </Link>
                <Link to="/aboutUs" style={{ color: "black" }}>
                  <DropdownItem>About Us</DropdownItem>
                </Link>

                <DropdownItem divider />
                <DropdownItem header tag="span">
                  Clients
                </DropdownItem>
                <Link to="/client_char" style={{ color: "black" }}>
                  <DropdownItem>Who We Accept</DropdownItem>
                </Link>
                <Link to="/meal_plan" style={{ color: "black" }}>
                  <DropdownItem>Meal Plan</DropdownItem>
                </Link>
                <Link to="/timetable" style={{ color: "black" }}>
                  <DropdownItem>Timetable</DropdownItem>
                </Link>
                <Link to="/prohibited_items" style={{ color: "black" }}>
                  <DropdownItem>
                    Prohibited Items
                </DropdownItem>
                </Link>
                <Link to="/lighthouse_rules" style={{ color: "black" }}>
                  <DropdownItem>Lighthouse Rules</DropdownItem>
                </Link>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* 
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
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem> */}
            <SocialMedia />
            <NavItem>
              <Link to="contact_us">
                <Button
                  className="btn-round"
                  color="danger"
                  // href="/contact_us"
                  // target="_blank"
                >
                  <i></i> Contact Us
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
