
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
                  href="#"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
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
          </div>
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


// <NavItem>
// <NavLink
//   data-placement="bottom"
//   href="#"
//   target="_blank"
//   title="Follow us on Twitter"
// >
//   <i className="fa fa-twitter" />
//   <p className="d-lg-none">Twitter</p>
// </NavLink>
// </NavItem>
// <NavItem>
// <NavLink
//   data-placement="bottom"
//   href="#"
//   target="_blank"
//   title="Like us on Facebook"
// >
//   <i className="fa fa-facebook-square" />
//   <p className="d-lg-none">Facebook</p>
// </NavLink>
// </NavItem>
// <NavItem>
// <NavLink
//   data-placement="bottom"
//   href="#"
//   target="_blank"
//   title="Follow us on Instagram"
// >
//   <i className="fa fa-instagram" />
//   <p className="d-lg-none">Instagram</p>
// </NavLink>
// </NavItem>
// <NavItem>
// <NavLink
//   data-placement="bottom"
//   href="#"
//   target="_blank"
//   title="Star on GitHub"
// >
//   <i className="fa fa-github" />
//   <p className="d-lg-none">GitHub</p>
// </NavLink>
// </NavItem>