import React from "react";

const SignIn = (props) => {
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
        value:"Sign In"
    }
  };
};
export default SignIn;
