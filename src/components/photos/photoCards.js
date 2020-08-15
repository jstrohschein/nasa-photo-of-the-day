import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';




const PhotoCards = () => {

  let today = new Date()
  let theDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const [photo, setPhoto] = useState([])
  const [date, setDate] = useState(theDate)

  const effectFn = () => {

    axios
      .get(`https://api.nasa.gov/planetary/apod?date=${date}`)

      .then(response => {
        console.log('RESPONSE: ', response);
        setPhoto(response.data)
      })

      .catch(error => console.log('ERROR: ', error));

  };


  useEffect(effectFn, [date])


  return (

    <div className='photos'>
      <Card>
        <CardBody>
          <CardTitle>{photo.title}</CardTitle>
          <CardText>{photo.explanation}</CardText>
          <CardText>
            <small className="text-muted">{photo.copyright}</small>
          </CardText>
        </CardBody>
        <CardImg bottom width="100%" src={photo.url} alt={photo.explanation} />
      </Card>
    </div>
  )


}

export default PhotoCards