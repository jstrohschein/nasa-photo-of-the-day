import React, { useState, useEffect } from 'react'
import axios from "axios";
import PhotoCard from './photoCard'



const PhotoCards = () => {


  const [photos, setPhotos] = useState([])

  const effectFn = () => {

    axios
      .get('https://dog.ceo/api/breed/labrador/images/random/15"')

      .then(response => {
        console.log('RESPONSE: ', response);
        setPhotos(response.data.message)
      })

      .catch(error => console.log('ERROR: ', error));

  };


  useEffect(effectFn, [])


  return (

    <div className='photos'>
      {photos.map(url => (

        <PhotoCard key={url} imgUrl={url} />

      ))}
    </div>
  )


}

export default PhotoCards