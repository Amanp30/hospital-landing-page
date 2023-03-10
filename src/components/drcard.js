import React from "react"

function Drcard({ name, profession, image = "/static/drimage.svg" }) {
  return (
    <>
      <div className="drcard">
        <img src={image} />
        <h4>{name}</h4>
        <p>{profession}</p>
      </div>
    </>
  )
}

export default Drcard
