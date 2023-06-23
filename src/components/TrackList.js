import React from 'react'
import {BsFillVolumeUpFill, BsMusicNoteList} from 'react-icons/bs'
import Track from '../images/track.jpg'


function TrackList() {
  return (
    <div className='trackList'>
        <div className="top">
            <img src={Track} alt="" />
            <p className='trackName'>
                J chau Timi <span className='trackSpan'>Swoopna Suman</span>
            </p>
        </div>
        <div className="bottom">
            <i> <BsFillVolumeUpFill /> </i>
            <input type="range" />
            <i><BsMusicNoteList/></i>
        </div>
    </div>
  )
}

export {TrackList}
