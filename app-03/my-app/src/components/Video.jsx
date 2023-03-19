import React from 'react'
import './Video.css';




const Video = ({title,img,view,channel,time,bg,verified,children}) => {
  return (
    <div className='container'>
     
      <img src={img} alt="Iron Man"/>
      <h3>{title}</h3>
      <p style={{backgroundColor:bg}}>Channel : {channel} {verified ? '✅' : null}</p>
      <p>View : {view} . <span>{time}</span></p>
      {children}
    </div>
  )
}

export default Video
