// import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import React from "react";
import Home from "../components/Home";
import Layout from "../components/layout";

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
