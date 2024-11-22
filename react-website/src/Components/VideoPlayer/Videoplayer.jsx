import React, { useRef } from 'react'
import './Videoplayer.css';
import video from '../../assets/video.mp4'

const Videoplayer = ({playstate, setPlaystate}) => {

    const player = useRef(null);
    const closeplayer = (e)=>{
        if(e.target === player.current){
            setPlaystate(false)
        }
    }

  return (                    
    <div className={`video-player ${playstate ? '' :'hide'}` } ref={player} onClick={closeplayer}> {/*to use useref on something we set ref={} in the required */}
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer