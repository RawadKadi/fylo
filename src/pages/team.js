import React from "react";

const Team = (props) => {
  return (
    <div>
      <h1>Team page</h1>
      <p>Value: {props.value}</p>
    </div>
  );
};
export const getStaticProps = async () => {
  return {
    props:{
        value:"Team"
    }
  };
};
export default Team;
