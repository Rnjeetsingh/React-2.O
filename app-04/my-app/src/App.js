import "./App.css";
import obj from "./components/Data";
import { useState } from "react";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";

// Topics To Learn :
// ---------------------------------------------------------
// useState Hook learn
// state handling
// Spred Opretor
// Data Sending Child to parents through the props
// Data Sending parents to child through the props
// useEffect Hook 
// splice function to replace the data through index
// findIndex function to finde a index from data
// Higher order function 
// Usig CRUD opration 
// Able to Read data, Delete data, Updata Data , Creat Data
// -----------------------------------------------------------

function App() {


  const [videos,setVideos] = useState(obj);
  const [editableVideos, setEditableVideos] = useState(null);

  const addVideos = (video) => {
    setVideos([
      ...videos,
      {...video, id: videos.length + 1}
    ])
  }
  
  const deleteVideo = (id) => {
  
    // setVideos( videos.filter(el=>el.id !== id)) -- Higher Order Function:

    setVideos(
      videos.filter((el) => {
       return (el.id !== id) 
      })
    )
  }

  const editVideo = (id) => {
   
    setEditableVideos( videos.find((el) => {
      return (el.id === id);
    }))
  }

  const updateVideos = (video) => {
    const index = videos.findIndex((el) => {
          return (el.id === video.id)
       
    })
      
    const newVideo = [...videos];
    newVideo.splice(index,1,video);
    setVideos(newVideo)
          
  }

  return (
    <div className="App">
      <h1>Youtube Thumbnail</h1>
      <AddVideos updateVideos={updateVideos} addVideos={addVideos} editableVideos={editableVideos}></AddVideos>
     <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo}></VideoList>
    </div>
  );
}

export default App;
