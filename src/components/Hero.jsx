import React from 'react'

import Button from "../elements/Button"
import Search from "./Search/InputSearch"
import LogoBrand from "../assets/Icon.png"
import HeroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <div className="position-relative" style={{backgroundImage: `url(${HeroImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "547px"}}>
        <div className="d-flex container justify-content-between align-items-center pt-3">
            <div style={{width: "180px"}}>
                <img src={LogoBrand} alt="LogoBrand" style={{width: "100%"}}/>
            </div>
            <div>      
                <Button className="btn btn-outline-light text-white fw-bolder" style={{padding: "6px 23px"}}>Login</Button>
                <Button className="btn btn-warning text-white fw-bolder ms-3" style={{padding: "6px 23px"}}>Register</Button>
            </div>     
        </div>

        <div className="container">
            <div className="text-white" style={{zIndex: 1}}>
                <h1 style={{margin: "60px 0 0 0", fontSize: "64px", lineHeight: "78px", fontWeight: 700}}>Explore</h1>
                <p className="fw-light" style={{margin: 0, fontSize: "64px", lineHeight: "78px", fontWeight: 300}}>your amazing city together</p>
            </div>
            <Search />
        </div>
    </div>
  )
}
