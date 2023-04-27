import React from "react";

const Features = (props) => {
  return (
    <div style={{height:"100vh",marginTop:"200px"}}>
      <h1>Features page</h1>
      <p>Value: {props.value}</p>
    </div>
  );
};
export const getStaticProps = async () => {
  return {
    props:{
        value:"Features"
    }
  };
};
export default Features;
