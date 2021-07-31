
/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Row,
  Container,
  Col,
  NavItem,
  NavLink,
} from "reactstrap";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  About this site
                </a>
              </li>
              <li>
                <a
                   href="https://rehabs.com/addiction/the-rehabilitation-process/"
                   target="https://rehabs.com/addiction/the-rehabilitation-process/"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link to="/aboutUs">
                About Us
                </Link>
                {/* <a
                  href="https://castlecraig.co.uk/blog"
                >
                  About Us
                </a> */}
              </li>
            </ul>
          </nav>
          <Row className="socialMediaRow">
          <div className="socialMediaIcons">

              <NavLink
                data-placement="bottom"
                href="#"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="#"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="#"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="#"
                target="_blank"
                title="Follow us on Linkedin"
              >
                <i className="fa fa-linkedin" />
              </NavLink>
          </div>
          </Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Dubeayi Okorie
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;