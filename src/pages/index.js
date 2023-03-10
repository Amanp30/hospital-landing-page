import Seo from "../components/seo"
import React from "react"
import Hero from "../components/hero"
import Ourservices from "../components/ourservices"
import Innovative from "../components/innovative"
import Specialists from "../components/specialists"
import Reviews from "../components/reviews"
import Newsletter from "../components/newsletter"
import Footer from "../components/footer"

function Index() {
  return (
    <>
      <div className="main">
        <div className="limage ">
          <img src="/static/ovalleft.png" alt="leftoval" />
        </div>
        <div className="rimage mdnone">
          <img src="/static/ovalright.png" alt="rightoval" />
        </div>
        <Hero />
        <Ourservices />
        <Innovative />
        <Specialists />
        <Reviews />
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export const Head = () => <Seo title="Home" description="Hello ji" />

export default Index
