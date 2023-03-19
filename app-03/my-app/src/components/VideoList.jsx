import React from 'react'
import Video from './Video';
import PlayButton from './PlayButton';

const VideoList = ({videos}) => {
  return (
    <div className="dataMap">
    {videos.map((el) => {
      return (
        <Video
          key={el.id}
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

    </div>
  )
}

export default VideoList


// <div className="dataMap">
// {videos.map((el) => {
//   return (
//     <Video
//       key={el.id}
//       title={el.title}
//       img={el.img}
//       view={el.view}
//       channel={el.channel}
//       time={el.time}
//       bg={el.bg}
//       verified={el.verified}
//     >
//       <PlayButton
//         onPlay={() => console.log("Playing..." ,el.title)}
//         onPause={() => console.log("Paused..", el.title)}
//       >
//         {el.title}
//       </PlayButton>
//     </Video>
    
//   );
// })}

// </div>