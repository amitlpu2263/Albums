import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const UpdateAlbum = (props) => {
  
  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById('title-input').value;
    let updateUserid = document.getElementById('userid-inp').value;

    if (updateTitle === '') {
      updateTitle = props.album.title;
    }
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  }

  return (
    <>
      <Navbar path="/" page="Home" />
      <div className='update-album'>
        <div className='form-container'>
          <h4>Title : {props.album.title}</h4>
          <div className='inp-container'>
            Enter Your New Title :
            <input type="text" id='title-input'></input>
          </div>

          <h4>User Id : {props.album.userId}</h4>
          <div className='inp-container'>
            Enter Your New  UserId :
            <input type="number" id='userid-inp'></input>
          </div>

          <Link to='/'><button type='Submit_button' onClick={getUpdateData}>Save</button></Link>
        </div>
      </div>
    </>
  )
}

export default UpdateAlbum;