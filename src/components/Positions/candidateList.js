import React from "react";
const CandidateList = () => {
  const uxList = [
    " Minimum of 4 years of designexperience",
    "Experienced with Sketch, Invision, Adobe Photoshop, ext…",
    "Strong conceptual thinker who possesses a wide range of design capabilities, including: web, responsive, blog, UI and brand development",
    "Demonstrates strong organizational skills in order to effectively handle multiple projects at a time",
    "Successfully manage schedule in order to meet strict timelines",
    "Strong communication and listening skills, and pay close attention to detail",
    "Open and receptive to design critique but also able to represent your own work",
    "Resourceful, demonstrating the ability to problem solve and find multiple design solutions",
    "Collaborates effectively with other members of the graphic design and web development teams",
    "Self-driven",
    "Comfortable working in a team setting",
  ];

  return <DesignerList uxList={uxList} />;
};

export default CandidateList;

function DesignerList(props) {
  const uxList = props.uxList;
  const uxItems = uxList.map((item) => (
    <li>
      <img src={require("../../../static/cornerRight.svg")} alt="" />
      {item}
    </li>
  ));
  return <ul className="list-unstyled">{uxItems}</ul>;
}
