import React from "react"
import Drcard from "./drcard"

function Specialists() {
  return (
    <>
      <div className="withh2text themargins specialists">
        <div
          className="ovalmiddle"
          style={{ position: "absolute", top: "-186px", right: "-208px" }}
        >
          <img src="/static/ovalmiddle.svg" alt="Oval Middle" />
        </div>
        <h2>We Have The Best Specialist</h2>
        <p>
          We have a wide experience in experience design and strategy, with
          locally-rooted knowledge.
        </p>
        <div className="services flex mgbtm85 mblock">
          <Drcard name="Dr. Filipa Gaspar" profession="Dental Care" />
          <Drcard name="Dr. Awaatif Al" profession="Cardiology" />
          <Drcard name="Dr. Sukhmeet Gorae" profession="Neurological" />
          <Drcard name="Dr. Siri Jakobsson" profession="Prediatrics" />
        </div>
      </div>
    </>
  )
}

export default Specialists
