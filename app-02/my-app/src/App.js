import "./App.css";
import Video from "./components/Video";
import obj from "./components/Data";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import { useState } from "react";

// Topics To Learn :
// -----------------------------------------
// using map to traverse the array of object
// using onClick event function
// sendig custom function through props
// importentc of keys in react
// events bubling 
// event handlings
// useState Hook learn
// state handling
// Spred Opretor
// ------------------------------------------

function App() {


  const [videos,setVideos] = useState(obj)

  const addVideo = () => {
    setVideos([...videos,{
      key:videos.length + 1,
      title: "IRON MAN 2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfanzqofntQ2gU3iR7yvkamngm4gmdVUwJ6g",
      view: "999k",
      channel: "Ranjeet Tech",
      time: "3 Year Ago",
      bg: "green",
      verified: true,
    }])
     
  }
  
  return (
    <div className="App">
      <h1>Youtube Thumbnail</h1>
      <button onClick={addVideo}>Add Video</button>
      <div className="dataMap">
      {videos.map((el, i) => {
        return (
          <Video
            key={i}
            title={el.title}
            img={el.img}
            view={el.view}
            channel={el.channel}
            time={el.time}
            bg={el.bg}
            verified={el.verified}
          >
            <PlayButton
              onPlay={() => console.log("Playing..." ,el.title)}
              onPause={() => console.log("Paused..", el.title)}
            >
              {el.title}
            </PlayButton>
          </Video>
          
        );
      })}

      <div style={{ clear: "both" }}></div>
      </div>
      <div>  <Counter></Counter> </div>
    
    </div>
  );
}

export default App;
