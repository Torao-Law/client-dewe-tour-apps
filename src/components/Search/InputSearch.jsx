import React from 'react'

function InputSearch() {
  return (
    <>
      <label className="text-white fw-normal" htmlFor="search" style={{marginTop: 64+"px"}}>Find great place to holliday</label>
      <div className="input-group mb-3">
          <input type="text" className="form-control p-2" id="search" aria-describedby="searchCategories"/>
          <button className="btn btn-warning text-white fw-bolder" type="button" id="searchCategories">Search</button>
      </div>
    </>
  )
}

export default InputSearch