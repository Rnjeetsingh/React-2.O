import React from 'react'
import './Video.css';


// Topics To Learn :
// ---------------------
// Functional Component:
// Styling in React:
// Props in React:
// import and export:
// Destructing:
// Conditional rendring
// ---------------------


const Video = ({title,img,view,channel,time,bg,verified}) => {
  return (
    <div className='container'>
     
      <img src={img} alt="Iron Man"/>
      <h3>{title}</h3>
      <p style={{backgroundColor:bg}}>Channel : {channel} {verified ? '✅' : null}</p>
      <p>View : {view} . <spane>{time}</spane></p>
    </div>
  )
}

export default Video
