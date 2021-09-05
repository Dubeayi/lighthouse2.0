
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
                  href="/about_site"
                  target="/about_site"
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
                href="https://twitter.com/lighthouselekki"
                target="https://twitter.com/lighthouselekki"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="https://web.facebook.com/profile.php?id=100070266453006"
                target="https://web.facebook.com/profile.php?id=100070266453006"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/lighthouselekki/"
                target="https://www.instagram.com/lighthouselekki/"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/lighthouselekki"
                target="https://www.linkedin.com/in/lighthouselekki"
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