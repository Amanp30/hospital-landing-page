import React, { useState } from "react"

function Newsletter() {
  const [email, setEmail] = useState("")

  const subscribe = e => {
    e.preventDefault()

    const regex = /^\S+@\S+\.\S+$/
    if (regex.test(email)) {
      alert("Subscribed Successfully")
      setEmail("")
      return
    }

    // Continue with the subscribe logic here...
  }
  return (
    <>
      <div className="themargins newsletter">
        <div className="subscribe">
          <h2>Subscribe to Newsletter</h2>
          <p>We have a wide experience in experience design and strategy,</p>
          <form>
            <div className="subscribeform flex columns">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                onClick={subscribe}
                type="submit"
                className="thebtn"
                style={{
                  width: "176px",
                  background: "#007FF4",
                  color: "white",
                }}
                value="Send Now"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Newsletter
