import React, { useState } from "react"
import { Link } from "gatsby"

function Service({ text, image, link }) {
  const [hover, setHover] = useState(false)

  function generateFilterFromColor(colorCode) {
    // Convert the color code to an RGB value
    const red = parseInt(colorCode.substring(0, 2), 16)
    const green = parseInt(colorCode.substring(2, 4), 16)
    const blue = parseInt(colorCode.substring(4, 6), 16)

    // Calculate the average brightness of the color
    const brightness = (red + green + blue) / 3

    // Calculate the sepia filter values based on the brightness
    const sepia = brightness < 128 ? brightness / 255 : 1
    const sepiaFilter = `sepia(${sepia})`

    // Return the full filter string
    return `filter: ${sepiaFilter};`
  }

  console.log(generateFilterFromColor("#FFF"))
  return (
    <>
      <div
        className={hover ? "service bluewhite" : "service"}
        onMouseEnter={e => setHover(true)}
        onMouseLeave={e => setHover(false)}
      >
        <img src={image} className={hover ? "whiteit blue" : "blue"} />

        <h3 className={hover && "topthis"}>{text}</h3>
        {hover && (
          <Link to={link}>
            Learn more <span>{">"}</span>
          </Link>
        )}
      </div>
    </>
  )
}

export default Service
