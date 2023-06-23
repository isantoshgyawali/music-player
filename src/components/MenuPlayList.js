import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'
import { PlayList } from './PlayList'

function MenuPlayList() {
  return (
    <div className='playListContainer'>

      <div className="nameContainer">
        <p>Playlist</p>
        <i><FaPlus /></i>
      </div>
      <div className="playListScroll">

      {
        PlayList && PlayList.map((list)=>(
          
        <div className="playList" key={list.id}>

          <i className='list'>
            {list.icon}
          </i>
          <p>{list.name}</p>
          <i className='trash'>
            <BsTrash />
          </i>

        </div>

        ))
      }

      </div>
    </div>
  )
}

export { MenuPlayList };
