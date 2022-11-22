import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <>
      <div class="bg-light">
    <Container>
      <footer class="py-5">
        <Row>
          <Col lg={2} md={4} sm={12}>
            <h5>Menu 1</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Page 1
                </a>
              </li>
            </ul>
          </Col>

          <Col className="mt-4 mt-md-0" lg={2} md={4} sm={12}>
            <h5>Menu 2</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Page 2
                </a>
              </li>
            </ul>
          </Col>

          <Col className="mt-4 mt-md-0" lg={2} md={4} sm={12}>
            <h5>Menu 3</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Page 3
                </a>
              </li>
            </ul>
          </Col>

          <Col className="mt-5 mt-lg-0" lg={{ span: 4, offset: 1 }}>
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>

        <div class="d-flex justify-content-between py-4 my-4 border-top">
          <p>© 2021 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#twitter" text="Twitter" aria-label="Twitter">
                <FaTwitter />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#linkedin" text="LinkedIn" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#facebook" text="Facebook" aria-label="Faebook">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Container>
  </div>
  </>
);
export default Footer;
