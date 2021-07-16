import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import LogoDark from 'assets/img/logo/logoDark.svg';
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
  DropdownMenu
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [lighthouseLogo, setLighthouseLogo] = React.useState("lighthouseLogoHidden");
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
        setLighthouseLogo("lighthouseLogoHidden")
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
            target="_blank"
            title="Coded by Dubeayi O"
            className={classnames(lighthouseLogo)}
            style={{
              backgroundImage: `url(${LogoDark})`
              // fontSize: "2.3em"
            }}
          >
            {/* Lighthouse (Logo area) */}
          </NavbarBrand>
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

          {/* <NavItem>
              <NavLink
                href="#"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> Menu Items
              </NavLink>
            </NavItem> */}

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
                          Dropdown header
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Services
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Separated link
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>


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
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="#"
                target="_blank"
              >
                <i></i> Contact Us
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
