import React from 'react'

import Button from "../../elements/Button"
import LogoBrand from "../../assets/Icon.png"

export default function Auth() {
  return (
      <div className="d-flex container justify-content-between align-items-center">
        <div style={{width: "180px"}}>
            <img src={LogoBrand} alt="LogoBrand" style={{width: 100+"%"}}/>
        </div>
        <div>      
          <Button className="btn btn-outline-light text-white fw-bolder" style={{padding: "6px 23px"}}>Register</Button>
          <Button className="btn btn-warning text-white fw-bolder" style={{padding: "6px 23px"}}>Register</Button>
        </div>      
      </div>
  )
}
