import React from "react";

const Index = (props) => {
  return (
    <div>
      <h1>Home page</h1>
      <p>Value: {props.value}</p>
    </div>
  );
};
export const getStaticProps = async () => {
  return {
    props:{
        value:"Home Page"
    }
  };
};
export default Index;
