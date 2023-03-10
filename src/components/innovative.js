import React from "react"

function Innovative() {
  return (
    <>
      <div className="innovative flex themargins mblock">
        <div>
          <h3>Clinic With Innovative</h3>
          <p>
            We provide the most full medical services, so every person could
            heave the oppurtunity to receive qualitative medical help.
          </p>
          <button
            className="thebtn"
            style={{ background: "#007FF4", color: "white", width: "186px" }}
          >
            Learn More
          </button>
        </div>
        <div>
          <img src="/static/all.svg" />
        </div>
      </div>
    </>
  )
}

export default Innovative
