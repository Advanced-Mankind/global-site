// import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import CaseStudyPageFirstSection from "../components/CaseStudyPage/CaseStudyPageFirstSection";
import CaseStudyPageImagesSection from "../components/CaseStudyPage/CaseStudyPageImagesSection";
import GetStarted from "../components/GetStarted/GetStarted";

export default function CaseStudies() {
  return (
    <Layout>
      <CaseStudyPageFirstSection
        imgs={[
          require("../../static/caseStudiesPageIllustrationDesktop.png"),
          require("../../static/caseStudiesPageIllustrationMT.png"),
        ]}
      />
      <div style={{ marginTop: "5%" }}>
        <CaseStudyPageImagesSection />
      </div>
      <div style={{ marginTop: "5%" }}>
        <GetStarted />
      </div>
    </Layout>
  );
}
