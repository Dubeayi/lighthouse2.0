import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import SectionSocialMedia from "./SectionSocialMedia";
// reactstrap components
import LogoDark from 'assets/img/logo/LogoDark.svg';
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  //NavLink,
  
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
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
      }
      //set the navbar back to being transparent if scrolling back up to the landing image
      else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
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
          >
            Lighthouse (Logo area)
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
              

                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                 Services  
                </DropdownItem>
            
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Schedule & Meal
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Daily Timetable
                </DropdownItem>
               
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Separated link
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Another separated link
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <SectionSocialMedia/>
    
            <NavItem>
              {/* <NavLink to="/contact-us"> */}
                <Button
                  className="btn-round"
                  color="danger"
                  href="/contact-us"
                  // target="_blank"
                >
                  <i></i> Contact Us
                </Button>
              {/* </NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
