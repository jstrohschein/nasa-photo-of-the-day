import React from 'react'



const PhotoCard = (props) => {


  return (

    <div className='photo_card'>
      <h3 className='photo_date'>10 July 2020</h3>
      <img clasName='photo' alt='Space' src={props.imgUrl}></img>
      <h3 className='photo_title'>Pariatur enim cillum voluptate in aute deserunt cupidatat id officia deserunt est mollit enim cillum.</h3>
      <p className='photo_time'>00:00</p>
    </div>

  )

}

export default PhotoCard