import React from "react";
const CandidateList = (props) => {
  const {data} = props;
  return <DesignerList uxList={data} />;
};

export default CandidateList;

function DesignerList(props) {
  const uxList = props.uxList;
  const uxItems = uxList.map((item, i) => (
    <ul key={i}>
      <li>{item}</li>
    </ul>
  ));
  return <li className="list-unstyled">{uxItems}</li>;
}
