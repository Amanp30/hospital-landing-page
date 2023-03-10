import React from "react"
import Service from "./service"

function Ourservices() {
  return (
    <>
      <div className="withh2text themargins">
        <h2>Our Services</h2>
        <p>
          We provide the most full medical services, so every person could heave
          the oppurtunity to receive qualitative medical help.
        </p>
        <div className="services flex mblock">
          <Service text="Dental Care" image="/static/tooth.svg" link="/hello" />
          <Service text="Pulmonary" image="/static/heart.svg" link="/lungs" />
          <Service
            text="Neurological"
            image="/static/humanbrain.svg"
            link="/neurological"
          />
          <Service
            text="Prediatrics"
            image="/static/medicalfile.svg"
            link="/neurological"
          />
        </div>
      </div>
    </>
  )
}

export default Ourservices
