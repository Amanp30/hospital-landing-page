import React, { useEffect, useState } from "react"
import Review from "./review"
import axios from "axios"

function Reviews() {
  const [reviews, setReviews] = useState([])
  const [randomReviews, setRandomReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://admin.tomedes.com/api/v1/get-reviews?page=1"
        )
        setReviews(response.data.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchReviews()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (reviews.length > 0) {
        const randomIndex1 = Math.floor(Math.random() * reviews.length)
        let randomIndex2 = Math.floor(Math.random() * reviews.length)
        while (randomIndex2 === randomIndex1) {
          randomIndex2 = Math.floor(Math.random() * reviews.length)
        }
        setRandomReviews([reviews[randomIndex1], reviews[randomIndex2]])
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [reviews])

  return (
    <>
      <div className="themargins reviews">
        <h2>What Our Customers Say</h2>
        <div
          className="flex mblock"
          style={{
            gap: "48px",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "80px",
          }}
        >
          {randomReviews.map(review => (
            <Review
              key={review.ID}
              review={review.Reviews}
              name={review.Name}
              company={review.Company}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Reviews
