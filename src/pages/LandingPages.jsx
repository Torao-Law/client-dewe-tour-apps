import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Hero from "../components/Hero"
import Quarantee from "../components/Quarantee"

export default function LandingPages() {
  return (
    <div style={{backgroundColor: "#E5E5E5"}}>
        <Hero />
        <div style={{marginTop: "-68px"}}>
            <Quarantee />
        </div>
        <div style={{marginTop: 72+"px", marginBottom: 121+"px"}}>
          <Categories />
        </div>
        <Footer />
    </div>
  )
}
