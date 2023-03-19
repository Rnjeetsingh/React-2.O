import React from 'react'
import './Video.css';




const Video = ({title,img,view,channel,time,bg,verified,children,deleteVideo,id,editVideo}) => {
  return (
    <div className='container'>
      <button className='del' onClick={() => deleteVideo(id)}>❌</button>
      <button className='edit' onClick={() => editVideo(id)}>Edit</button>
      <img src={img} alt="Iron Man"/>
      <h3>{title}</h3>
      <p style={{backgroundColor:bg}}>Channel : {channel} {verified ? '✅' : null}</p>
      <p>View : {view} . <span>{time}</span></p>
      {children}
    </div>
  )
}

export default Video
