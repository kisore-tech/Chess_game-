import React from 'react'

export default function Alert(props) {
  return (
    <div className="alert alert-primary alert-dismissible fade show mt-5" role="alert">
     <strong>{props.alert}</strong> 
     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>

  )
}
