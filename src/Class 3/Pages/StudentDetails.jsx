import React from 'react'
import { useParams } from 'react-router-dom'

const StudentDetails = () => {
    let {id}=useParams()
    console.log(id)
  return (
    <div>
      <h1>Student Id : {id} </h1>
    </div>
  )
}

export default StudentDetails
