import React from 'react'
import FormatNumber from "../utils/FormatNumber"
import Categories from '../config/categories.json'

export default function CategoriesCard() {
  return (
    <div className="container d-flex justify-content-around flex-wrap">
      {Categories.Categories.map((item, index) => (
        <div key={index} className="card mt-4 border-0 p-2 position-relative text-justify" style={{width: "350px"}}>
            <p className="position-absolute bg-white py-1 px-3 fw-bolder rounded" style={{right: 0, top: 26}}>{item.capacity}</p>
            <div className="item-center" >
              <img src={item.image} alt="imgQuaratee" style={{width: 100+"%"}}/>
            </div>
            <p className="fw-semibold fs-4 m-0 mt-2" >{item.title}</p>
            <div className="d-flex justify-content-between align-items-center mt-1">
                <p className=" text-warning fw-bold m-0" style={{fontSize: 18+"px"}}>{`IDR ${FormatNumber(item.price)}`}</p>
                <p className="text-secondary m-0">{item.location}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
