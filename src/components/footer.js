import React from "react"
import { Link } from "gatsby"
function Footer() {
  return (
    <>
      <div className="flex linkarea themargins mblock">
        <img src="/static/medicare.png" />
        <div className="flinks flex columns">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/news">News</Link>
        </div>
      </div>

      <div className="copyright themargins ">
        <div className="flex " style={{ gap: "9px" }}>
          {" "}
          <a href="http://facebook.com">
            <img src="/static/facebook.svg" />
          </a>
          <a href="http://twitter.com">
            <img src="/static/twitter.svg" />
          </a>
          <a href="http://google.com">
            <img src="/static/google.svg" />
          </a>
        </div>
        <p>©2020 PodPayment - 2020</p>
      </div>
    </>
  )
}

export default Footer
