import React from "react";
import GetStarted from "../components/GetStarted/GetStarted";
import HeroSection from "../components/HeroSection/HeroSection";
import Layout from "../components/layout";
import OneSizeDoesNotFill from "../components/OneSizeDoesNotFit/OneSizeDoesNotFill";
import Process from "../components/Process/Process";
import stylesApproach from "../theme/ourApproach.module.css";

export default function OurApproach() {
  return (
    <Layout>
      <div
        className={`${stylesApproach.body} "container-fluid p-0"`}
        style={{
          paddingTop: "90px",
        }}
      >
        <div style={{ marginTop: "5%" }}>
          <HeroSection />
        </div>
      </div>
      <div style={{ marginTop: "5%" }}>
        <OneSizeDoesNotFill
          firstTitle={"One Size Does Not Fit All"}
          secondTitle={"It’s Time for Tomorrow’s Technology"}
          firstParagraph={
            "Your business is unique, with its own set of values and ace-in-the-hole products and features important to your brand. We’re dedicated to understanding the values of your brand and the motivation and mindset of your customers. We connect the dots to build digital solutions fit specifically for you."
          }
          secondParagraph={
            "Your business needs evolve. We create adaptable, future-proof products ready to evolve with you. We use a technology stack ahead of its time to execute product releases that are fast and flexible. It’s about time your site is ready for tomorrow’s customers, today. "
          }
        />
      </div>
      <div style={{ marginTop: "5%" }}>
        <Process />
      </div>
      <div style={{ marginTop: "5%" }}>
        <GetStarted />
      </div>
    </Layout>
  );
}
