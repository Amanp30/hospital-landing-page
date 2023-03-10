import React, { useState } from "react"
import { Link } from "gatsby"
function Menu() {
  const [open, setOpen] = useState(false)
  return (
    <div className="menu flex themargins ">
      <div>
        <Link to="/">
          <img
            src="/static/medicare.png"
            alt="Medicare plus logo"
            title="Medicare Logo"
          />
        </Link>
      </div>
      <div className="mobilebtn" onClick={e => setOpen(!open)}>
        <img src="/static/menuicon.svg" style={{ width: "50px" }} />
      </div>
      <div className={open ? " links flex mopen" : " links flex mdnone"}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/news">News</Link>
        <Link to="/contact" className="contactmenu">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Menu
