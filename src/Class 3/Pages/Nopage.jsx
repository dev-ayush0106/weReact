import React from 'react'
import { useLocation } from 'react-router-dom'

const Nopage = () => {
    const loc=useLocation()
    console.log(loc)
  return (
    <div>
      <h1>Page is not Defined {loc.pathname}</h1>
    </div>
  )
}

export default Nopage
