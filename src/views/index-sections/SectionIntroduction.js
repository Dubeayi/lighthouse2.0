import React from "react";

// reactstrap components
import {
  Container
} from "reactstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import village from 'assets/img/village.jpg';

function SectionIntroduction() {

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  })

  return (
    <>
      <div
      className="section section-buttons lookingDown"
      style={{
        backgroundImage: `url(${village})`
      }}
      >
        <Container>
          <div className="title" data-aos="fade-up">
            <h2 style={{color: "#FFF", fontWeight: 400}}><span style={{ color: "#F5593D", fontWeight: 700 }}>You</span> have the power to change who you are</h2>
            <br />
          </div>
          <div className="title" data-aos="fade-up">
            <h2 style={{color: "#FFF", fontWeight: 400}}><span style={{ color: "#F5593D", fontWeight: 700 }}>Our</span> purpose is to restore the dignity and vision back into the lives of individuals, one mind
              at a time.</h2>  <br />
          </div>
          <div data-aos="fade-up">
            <h2 style={{color: "#FFF", fontWeight: 400}}><span style={{ color: "#F5593D", fontWeight: 700 }}>We</span> are here to support you on this journey, so that you don’t have to do it alone. You will smile again.</h2>
            {/* <h5 className="textBody">
              Our purpose is to restore the dignity and vision back into the lives of individuals, one mind
              at a time. */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionIntroduction;
