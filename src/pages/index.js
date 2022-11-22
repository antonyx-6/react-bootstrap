import * as React from "react";
import Layout from "../components/layout";
import { SEO } from "../components/seo";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <p>Hello World!</p>
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
