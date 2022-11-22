import * as React from "react";
import Layout from "../components/layout";
import { SEO } from "../components/seo";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Image from "react-bootstrap/Image";
import LargeImage from "../images/image-960w.webp";
import SmallImage from "../images/image-480w.webp";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Container>
          <Row className="py-5 g-5">
            <Col xl={3} lg={4} sm={6} xs={6}>
              <Card className="border-0 h-100">
                <div>
                  <Image
                    src={SmallImage}
                    srcSet={`${SmallImage} 480w, ${LargeImage} 960w`}
                    alt="Responsive Image"
                    fluid
                  />
                </div>
                <Card.Body className="border">
                  <Card.Title>
                    <h4 className="my-1">Lorem Ipsum</h4>
                  </Card.Title>
                  <Card.Text className="my-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border">
                  <div className="py-1">
                    <span class="badge rounded-pill bg-dark">Finance</span>
                    <span class="badge rounded-pill bg-dark">Retail</span>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} lg={4} sm={6} xs={6}>
              <Card className="border-0 h-100">
                <div>
                  <Image
                    src={SmallImage}
                    srcSet={`${SmallImage} 480w, ${LargeImage} 960w`}
                    alt="Responsive Image"
                    fluid
                  />
                </div>
                <Card.Body className="border">
                  <Card.Title>
                    <h4 className="my-1">Lorem Ipsum</h4>
                  </Card.Title>
                  <Card.Text className="my-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border">
                  <div className="py-1">
                    <span class="badge rounded-pill bg-dark">Finance</span>
                    <span class="badge rounded-pill bg-dark">Retail</span>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} lg={4} sm={6} xs={6}>
              <Card className="border-0 h-100">
                <div>
                  <Image
                    src={SmallImage}
                    srcSet={`${SmallImage} 480w, ${LargeImage} 960w`}
                    alt="Responsive Image"
                    fluid
                  />
                </div>
                <Card.Body className="border">
                  <Card.Title>
                    <h4 className="my-1">Lorem Ipsum</h4>
                  </Card.Title>
                  <Card.Text className="my-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border">
                  <div className="py-1">
                    <span class="badge rounded-pill bg-dark">Finance</span>
                    <span class="badge rounded-pill bg-dark">Retail</span>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  // <SEO />
  <>
    <SEO title="Index Page" />
    <meta name="description" content="Hello World" />
  </>
);
