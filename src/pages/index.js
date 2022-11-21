import * as React from "react";
import Layout from "../components/layout";

import { SEO } from "../components/seo";

import { FaBeer } from "react-icons/fa";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <p>
          Hello World <FaBeer />
        </p>
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
