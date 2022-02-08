import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function SectionIntroduction() {

  return (
    <>
      <div
        className="section lookingDown"
        style={{
          backgroundImage: `url(https://lighthouselekki.s3.us-east-2.amazonaws.com/hug1.jpg)`,
          // https://i.ibb.co/whS3XT0/hug1.jpg
          boxShadow: "5px 5px 10px rgba(0,0,0,0.5)"
        }}
      >
        <Container>
          <div data-aos="fade-zoom-in">
            <h2 style={{ color: "#FFF", fontWeight: 600 }}>
              <span style={{ color: "#F5593D", fontWeight: 700 }}>You</span>{" "}
              have the power to change who you are
            </h2>
            <br />
          </div>
          <div data-aos="fade-zoom-in">
            <h2 style={{ color: "#FFF", fontWeight: 600 }}>
              <span style={{ color: "#F5593D", fontWeight: 700 }}>Our</span>{" "}
              purpose is to restore the dignity and vision back into the lives
              of individuals, one mind at a time.
            </h2>{" "}
            <br />
          </div>
          <div data-aos="fade-zoom-in">
            <h2 style={{ color: "#FFF", fontWeight: 600 }}>
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
