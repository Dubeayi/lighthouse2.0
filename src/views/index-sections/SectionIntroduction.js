import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// import Aos from "aos";
import village from "assets/img/hug1.jpg";

function SectionIntroduction() {
  // React.useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // });

  return (
    <>
      <div
        className="section section-buttons lookingDown"
        style={{
          backgroundImage: `url(${village})`,
          boxShadow: "5px 5px 10px rgba(0,0,0,0.5)"
        }}
      >
        <Container>
          <div className="title">
            <h2 style={{ color: "#FFF", fontWeight: 400 }}>
              <span style={{ color: "#F5593D", fontWeight: 700 }}>You</span>{" "}
              have the power to change who you are
            </h2>
            <br />
          </div>
          <div className="title">
            <h2 style={{ color: "#FFF", fontWeight: 400 }}>
              <span style={{ color: "#F5593D", fontWeight: 700 }}>Our</span>{" "}
              purpose is to restore the dignity and vision back into the lives
              of individuals, one mind at a time.
            </h2>{" "}
            <br />
          </div>
          <div>
            <h2 style={{ color: "#FFF", fontWeight: 400 }}>
              <span style={{ color: "#F5593D", fontWeight: 700 }}>We</span> are
              here to support you on this journey, so that you don’t have to do
              it alone. You will smile again.
            </h2>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionIntroduction;
