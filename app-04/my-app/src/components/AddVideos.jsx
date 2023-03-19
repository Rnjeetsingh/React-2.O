import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./AddVideos.css";

const initialState = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfanzqofntQ2gU3iR7yvkamngm4gmdVUwJ6g",
    channel: "Ranjeet Tech",
    time: "3 Year Ago",
    bg: "green",
    verified: true,
    title: '',
    view: '',
  }

const AddVideos = ({ addVideos,editableVideos,updateVideos }) => {
  const [video, setVideo] = useState(initialState);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(editableVideos){
      updateVideos(video);
    }else{
      addVideos(video);
    }
   
    setVideo(initialState)
  };

  const handlerChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  useEffect(() => {
     if(editableVideos){
      setVideo(editableVideos);
     }
  },[editableVideos])

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          onChange={handlerChange}
          placeholder="Title"
          value={video.title}
        ></input>
        <input
          type="text"
          name="view"
          onChange={handlerChange}
          placeholder="Views"
          value={video.view}
        ></input>
        <button className="bttur" onClick={handlerSubmit}>
         {editableVideos ? 'Edit Videos' : 'Add Videos'}
        </button>
      </form>
    </div>
  );
};

export default AddVideos;
