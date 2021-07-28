import React from "react";
import { Container, Row, Col } from "reactstrap";

const BottomSection = () => {
  return (
    <>
      <div
        // className="section"
        style={{ backgroundColor: "floralwhite", paddingBottom: "55px" }}
      >
        <Container>
          <Row>
            <Col className="aboutUsBorder">
              <br />
              <h2 className="title center">OUR PHILOSOPHY</h2>
              <div className="bodyText">
                <p>
                  <span style={{fontWeight: 600, textAlign: "center"}}>“The first step to change is awareness, the second step is acceptance”.</span>
                  <br />
                  <br />
                  We at Lighthouse Lekki recognise this journey begins with the first
                  step, and we commend you on taking it. It is in the decision to leave
                  one spot to go towards another, that can change our lives forever.</p>
                <br /> <p>
                  Our purpose is to restore the dignity and vision back into the lives of
                  individuals, one fine mind at a time. We are here to support you on this
                  journey, so that you don’t have to do it alone. Some people with complex
                  drug-abuse related problems require an intense support program, as well
                  as residential facilities that can’t be realistically delivered in a
                  community or outpatient setting. We at Lighthouse Lekki recognise the
                  need for such a service, and are here to provide it. Our staff will
                  integrate sound psychological practices into a holistic, person-centred
                  recovery process. We provide individualized care as well as group
                  therapy, to treat the entire person physically, psychologically and
                  spiritually.</p>
                <br /><p>
                  We believe recovery requires a multidisciplinary, proactive and
                  comprehensive approach, to address the many fundamental and underlying
                  causes of drug and alcohol addiction. These factors include
                  physiological, psychological, emotional, social, and environmental
                  influences, to name a few, each of which requires targeted treatment
                  interventions, which we are dedicated to providing. It is also our
                  philosophy to continuously evaluate and improve these evidence based
                  treatments. We understand that recovery can sometimes be a lengthy
                  process; however, we aim, not only to educate all clients about the
                  skills and tools necessary to achieve long-term sobriety, but also to
                  empower them with the ability to use them effectively.</p>
                <br /><p>
                  Our promise to you is that you will be treated with respect as you
                  receive impeccable service in a clean, professional, and therapeutic
                  environment, from our seasoned professionals. You are very welcome here.
                  Please be assured of our commitment to working in partnership with you.
                  <br /></p><br />
                  <p>I hope that your experience here is a truly significant one.</p>
                <p className="signature">L.E</p>
                <p> Lawale Eso</p>
                <p>Chief Executive Officer
                </p>
              </div>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BottomSection;
