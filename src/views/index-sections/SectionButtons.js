import React from "react";

// reactstrap components
import {
  Container
} from "reactstrap";
import Aos from "aos";
import "aos/dist/aos.css";


function SectionButtons() {

  React.useEffect(()=> {
    Aos.init({duration: 2000});
  })

  return (
    <>
      <div data-aos="fade-up" className="section section-buttons">
        <Container>
          <div className="title">
            <h2><span style={{ color: "#F5593D", fontWeight: 700 }}>You</span> have the power to change who you are</h2>
            <br/>
            <h5 className="textBody">
              Our purpose is to restore the dignity and vision back into the lives of individuals, one mind
              at a time. <br/>
              <br />
              We are here to support you on this journey, so that you don’t have to do it alone. You will smile again.
            </h5>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;
