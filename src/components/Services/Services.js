import React from "react";
import "bulma/css/bulma.min.css";
import Image from "next/image";
import phoneIcon from "../../../public/images/icon-access-anywhere.svg";
import ServiceCard from "./ServiceCard";
import securityIcon from "../../../public/images/icon-security.svg";
import collabIcon from "../../../public/images/icon-collaboration.svg";
import fileIcon from "../../../public/images/icon-any-file.svg";

function Services() {
  return (
    <div className="columns is-centered">
      <div className="column">
        <div className="columns is-gapless">
          <div className="column has-text-centered">
            <div className="columns">
              <div className="column ">
                <ServiceCard
                  imageSrc={phoneIcon}
                  imageAlt="Phone icon"
                  heading="Access your files, anywhere"
                  text="The ability to use a smarphone, tablet, or computer to access your account means your files follow you everywhere."
                  width={150}
                  
                />
              </div>
              <div className="column">
                <ServiceCard
                  imageSrc={securityIcon}
                  imageAlt="Phone icon"
                  heading="Security you can trust"
                  text="2-factor authentication and user-controlled encryption are just a couple of the sercurity features we allow to help secure your files"
                  width={112}
                  

                />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <ServiceCard
                  imageSrc={collabIcon}
                  imageAlt="Phone icon"
                  heading="Real-time collaboration"
                  text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
                  width={150}
                />
              </div>
              <div className="column">
                <ServiceCard
                  imageSrc={fileIcon}
                  imageAlt="Phone icon"
                  heading="Access your files, anywhere"
                  text="The ability to use a smarphone, tablet, or computer to access your account means your files follow you everywhere."
                  width={176}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
