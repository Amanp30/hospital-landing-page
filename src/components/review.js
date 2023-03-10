import React from "react"

function Review({ review, name, company }) {
  return (
    <>
      <div className="singlereview">
        <p> {review}</p>
        <img src="/static/quote.svg" className="quote" />
        <div className="author flex">
          <div>
            <img src="/static/person.svg" />
          </div>
          <div>
            <p>{name}</p>
            <span>{company}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
