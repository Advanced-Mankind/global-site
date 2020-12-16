import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export default function Error404() {
  return (
    <Layout>
      <Link to="/404/">Error404</Link>
    </Layout>
  );
}
