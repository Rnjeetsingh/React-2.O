import "./App.css";
import Video from "./componets/Video";

// Topics To Learn :
// ---------------------
// Functional Component:
// Styling in React:
// Props in React:
// import and export:
// Destructing:
// Conditional rendring
// ---------------------

function App() {
  let obj = {
    title: "IRON MAN",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqZpxuTwy7Zh5JqkqTtWFmzv_obEFTtyuvA",
    view: "20M",
    channel: "Ranjeet Tech",
    time: "1 Year Ago",
    bg: "red",
    verified:true
  };
  let obj1 = {
    title: "IRON MAN 2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfanzqofntQ2gU3iR7yvkamngm4gmdVUwJ6g",
    view: "999k",
    channel: "Ranjeet Tech",
    time: "3 Year Ago",
    bg: "green",
    verified:false
  };

  return (
    <div className="App">
      <h1>Youtube Thumbnail</h1>
      <Video {...obj}></Video>
      <Video {...obj1}></Video>
      <Video
        title="IRON MAN 3"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqZpxuTwy7Zh5JqkqTtWFmzv_obEFTtyuvA"
        view="20M"
        channel="Ranjeet Tech"
        time="2 Month Ago"
        bg="blue"
        verified="true"
      ></Video>
    </div>
  );
}

export default App;
