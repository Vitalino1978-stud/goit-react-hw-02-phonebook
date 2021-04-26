import React from 'react'
import './Filter.css'

const Filter = ({valueState, filterByName}) => {
  return (
    <label className="label" >
      <input type="text" value={valueState} onChange={filterByName}/>
      
    </label>
  )
}

export default Filter;