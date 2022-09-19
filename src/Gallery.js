import React from 'react'

function Gallery(props) {
  return (
    <div className='Cards'>

        <img className='Image' src={props.image} alt={props.name}  />
        <div className='content'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <a href={props.location} id="loc">Accomodation 📌</a>
        </div>
       
    </div>
  )
}

export default Gallery