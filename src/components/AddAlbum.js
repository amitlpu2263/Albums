import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const AddAlbum = (props) => {

  //this function get all the input like userid and title then call add albumm function for add it on the album list
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <>
      {/* navber */}
      <Navbar path="/" page="Home" />


      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h3>Enter New Album Details</h3>
          <div className='inp-container'>
            Enter Your New userId :
            <input id='aaform-userid-inp' type="number" />
            Enter Your New Album Title :
            <input id='aaform-title-inp' type="text" />
          </div>
          <div>
            <Link to="/"><button onClick={getAlbumFormData}>Add To List</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAlbum