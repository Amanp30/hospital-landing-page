import React from "react"
import Menu from "../components/menu"
import "../components/main.css"

function hero() {
  return (
    <>
      <div className="jitop">
        <Menu />
        <div className="hero flex themargins mblock">
          <div>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                margin: "0px !important",
              }}
            >
              Welcome to MediCare+ Clinic
            </p>
            <h1>Best Specialists</h1>
            <p style={{ lineHeight: "39px" }}>
              We are on the leading edge of cancer care. Providing the full
              continuum of cancer treatments and supportive care services in a
              single convenient location.
            </p>
            <div
              className="flex mblock"
              style={{ gap: "24px", marginTop: "44px" }}
            >
              <button
                className="thebtn"
                style={{ background: "#007FF4", color: "white" }}
              >
                Make an Appointment
              </button>
              <button
                className="thebtn"
                style={{ background: "#FFFFFF", color: "#007FF4" }}
              >
                Departments
              </button>
            </div>
          </div>
          <div>
            <img src="/static/rectangle.svg" alt="big rect" />
          </div>
        </div>
      </div>
    </>
  )
}

export default hero
