import React from 'react'

import Quarantee from '../config/guarantee.json'

export default function CategoriesCard() {
  return (
    <div className="container d-flex justify-content-around">
      {Quarantee.quarantee.map((item, index) => (
        <div key={index} className="card d-flex text-center p-5 align-items-center border-0" style={{width: "250px", height: "350px"}}>
            <div className="item-center" style={{height: 60+"px"}}>
              <img src={item.image} alt="imgQuaratee" />
            </div>
            <h5 className="card-title pt-5 fw-bolder">{item.name}</h5>
            <p className="card-text text-secondary">{item.description}</p>
          </div>
        ))
      }
    </div>
  )
}
