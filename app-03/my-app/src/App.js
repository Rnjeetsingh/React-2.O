import "./App.css";
import Video from "./components/Video";
import obj from "./components/Data";
import PlayButton from "./components/PlayButton";
import { useState } from "react";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";

// Topics To Learn :
// ------------------------------------------------
// using map to traverse the array of object
// using onClick event function
// sendig custom function through props
// importentc of keys in react
// events bubling 
// event handlings
// useState Hook learn
// state handling
// Spred Opretor
// Data Sending Child to parents through the props
// -------------------------------------------------

function App() {


  const [videos,setVideos] = useState(obj);

  const addVideos = (video) => {
    setVideos([
      ...videos,
      {...video, id: videos.length + 1}
    ])
  }


  return (
    <div className="App">
      <h1>Youtube Thumbnail</h1>
      <AddVideos addVideos={addVideos}></AddVideos>
     <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
