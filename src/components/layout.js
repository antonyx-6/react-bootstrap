import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header";
import Footer from "./footer";

import Container from "react-bootstrap/Container";

export default function Layout({ children }) {
  return (
    <Container fluid className="p-0">
      <Header></Header>
      {children}
      <Footer></Footer>
    </Container>
  );
}
