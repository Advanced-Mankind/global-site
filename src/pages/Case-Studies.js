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
        imgs={[require('../../static/caseStudiesPageIllustrationDesktop.png'), require('../../static/caseStudiesPageIllustrationMT.png')]}
      />
      <div style={{ marginTop: '5%' }} >
        <CaseStudyPageImagesSection
          desktopImgs={[require('../../static/caseStudiesPageMotoDesktop.png'), require('../../static/caseStudiesPageChedrahuiDesktop.png')]}
          tabletImgs={[require('../../static/caseStudiesPageMotoTablet.png'), require('../../static/caseStudiesPageChedrahuiTablet.png')]}
          mobileImgs={[require('../../static/caseStudiesPageMotoMobile.png'), require('../../static/caseStudiesPageChedrahuiMobile.png')]}
          chedrahuiDesktop={[require('../../static/caseStudiesPagePhone1Desktop.png'), require('../../static/caseStudiesPagePhone2Desktop.png'), require('../../static/caseSudiesPageLaptopDesktop.png')]}
          chedrahuiTablet={[require('../../static/caseStudiesPagePhone1Tablet.png'), require('../../static/caseStudiesPagePhone2Tablet.png'), require('../../static/caseSudiesPageLaptopTablet.png')]}
          chedrahuiMobile={[require('../../static/caseStudiesPagePhone1Mobile.png'), require('../../static/caseStudiesPagePhone2Mobile.png'), require('../../static/caseSudiesPageLaptopMobile.png')]}
        />
      </div>
      <div style={{ marginTop: "5%" }}>
        <GetStarted />
      </div>
    </Layout>
  );
} 
