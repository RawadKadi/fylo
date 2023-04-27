import React from "react";
import Link from "next/link";
import "bulma/css/bulma.min.css";
import illustrationIntro from "../../../public/images/illustration-intro.jpg";
import Image from "next/image";
import styles from"./Intro.module.css"
function Intro() {
  return (
    <div>
      <div className="has-text-centered">
        <Image
          src={illustrationIntro}
          alt="illustration-intro image"
          width={500} // Set desired width
          height={500} // Set desired height
        />
        <div>
          <div  style={{width:"50vw"}} className="mx-auto" >
            <h1 className="title is-size-1 has-text-white">
              All your files in one secure location, accessible anywhere.
            </h1>
          </div>
          <div className="px-6 mx-auto" style={{ marginTop: "50px",width:"50vw" }}>
            <p className="title is-size-0.5 has-text-grey-light">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers
            </p>
          </div>
          <div className="my-6" >
          <button className={`button is-size-3 ${styles.customButton} mx-auto is-fullwidth-mobile getStartedBtn`}>              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
