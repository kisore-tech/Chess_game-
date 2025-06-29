import React ,{useState} from 'react'
import propTypes from 'prop-types'
export default function Navbar(props) {
  
  return (
    <>
   
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b>{props.title}</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.about}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Chess">Chess</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
       <input className="form-check-input" type="checkbox" role="switch"  onClick={props.togglemode} id="switchCheckDefault "/>
       <label className="form-check-label" htmlFor="switchCheckDefault">{`Enable ${props.mode==='light'?'dark':'light'}`}</label>
       </div>
    </div>
  </div>
</nav>  
    </>
  )
}
Navbar.propTypes = {
  title: propTypes.string.isRequired,   
  about: propTypes.string,
};

Navbar.defaultProps = {
  title: 'set title here',
  about: 'About text here',
};

                 