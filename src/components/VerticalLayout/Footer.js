import React from "react";
import { Row, Col, Container } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
              <footer className="footer">
                  <Container fluid>
                        <Row>
                            <Col sm={6}>
                                {new Date().getFullYear()} © Material Buy.
                            </Col>
                            {/* <Col sm={6}>
                                <div className="text-sm-right d-none d-sm-block">
                                    Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign
                                </div>
                            </Col> */}
                            <Col sm={6}>
                                <div className="text-sm-right d-none d-sm-block">
                                    Developed by Orions IT
                                </div>
                            </Col>
                        </Row>
                  </Container>
              </footer>
    </React.Fragment>
  );
};

export default Footer;
