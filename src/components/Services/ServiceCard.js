import React from "react";
import "bulma/css/bulma.min.css";
import Image from "next/image";
import "./Services.module.css"
function ServiceCard({ imageSrc, imageAlt, heading, text, width }) {
  return (
    <div className="d-flex align-items-center flex-column" >
      <figure className="has-text-centered">
        <Image src={imageSrc} alt={imageAlt} width={width} style={{marginBottom:"50x1   "}} />
      </figure>
      <div style={{ width: "40vw" }} className="mx-auto">
        <h1 className="title is-size-0.5 has-text-white">{heading}</h1>
      </div>
      <div
        className=" mx-auto is-2 is-offset-5 is-mobile is-4-desktop"
        style={{ marginTop: "50px", width: "45vw" }}
      >
        <p className="title is-size-0.2 has-text-grey-light">{text}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
