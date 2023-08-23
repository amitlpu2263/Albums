import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = (props) => {

  return (
    <div className='navbar'>
      <h2 onClick={() => props.handleClick(false)}>
        <div className='brand-first-half' > 
        <span>ALBUMS</span>
        <span >LIST</span>
        </div>
      </h2>
      <Link to={props.path}><button>{props.page}</button></Link>
    </div>
  )
}

export default Navbar
